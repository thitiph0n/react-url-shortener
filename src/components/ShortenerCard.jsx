import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Api from '../apis/axios';

const ShortenerCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [longUrlError, setLongUrlError] = useState('');
  const [longUrlInput, setLongUrlInput] = useState('');
  const [customUrlError, setCustomUrlError] = useState('');
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [apiError, setApiError] = useState('');

  const shortenLink = async () => {
    //validate input
    let longUrlErr, customUrlErr;
    if (longUrlInput.trim() === '') {
      longUrlErr = "URL can't be empty";
    }

    if (customUrlInput.length > 16) {
      customUrlErr = 'Custom URL shuould have maximum 16 characters';
    }

    if (longUrlErr || customUrlErr) {
      setLongUrlError(longUrlErr ? longUrlErr : '');
      setCustomUrlError(customUrlErr ? customUrlErr : '');
      return;
    }

    const body = {
      url: longUrlInput,
      customLinkId: customUrlInput,
    };

    setIsLoading(true);

    try {
      const res = await Api.post('/links', body);

      props.onShortenComplete(res.data);
    } catch (error) {
      if (error.response) {
        setApiError(error.response.data.error);
      }

      setApiError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='mx-2 mt-24 bg-white w-full max-w-[500px] rounded-lg shadow-md px-5 py-4'>
        <div className='py-3 flex flex-row items-center'>
          <Icon
            icon='mdi:link-variant-plus'
            width={25}
            height={25}
            color='#7c2d12'
          />
          <h2 className='pl-1 text-lg font-semibold text-yellow-800'>
            Enter a long URL to make it tiny
          </h2>
        </div>
        <div className='flex flex-col items-start'>
          <input
            className={
              'appearance-none block w-full bg-gray-100 text-gray-700 border\
            rounded py-3 px-4 mb-1  focus:outline-none focus:bg-white focus:border-yellow-700' +
              (longUrlError !== '' || apiError !== ''
                ? 'border-2 border-red-500'
                : '')
            }
            type='text'
            placeholder='https://example.com'
            value={longUrlInput}
            onChange={(e) => {
              setLongUrlInput(e.target.value);
              if (longUrlError != '') {
                setLongUrlError('');
              }
              if (apiError != '') {
                setApiError('');
              }
            }}
          />
          {longUrlError !== '' ? (
            <p className='text-red-500 text-sm italic'>{longUrlError}</p>
          ) : null}
        </div>
        <div className='py-3 flex flex-row items-center'>
          <Icon icon='mdi:auto-fix' width={25} height={25} color='#7c2d12' />
          <h2 className='pl-1 text-lg font-semibold text-yellow-800'>
            Customize your link (Optional)
          </h2>
        </div>
        <div className='flex flex-col items-start mb-4'>
          <input
            className={
              'appearance-none block w-full bg-gray-100 text-gray-700 border\
            rounded py-3 px-4 mb-1  focus:outline-none focus:bg-white focus:border-yellow-700' +
              (customUrlError !== '' || apiError !== ''
                ? 'border-2 border-red-500'
                : '')
            }
            type='text'
            placeholder='my-custom-link'
            value={customUrlInput}
            onChange={(e) => {
              setCustomUrlInput(e.target.value);
              if (customUrlError != '') {
                setCustomUrlError('');
              }
              if (apiError != '') {
                setApiError('');
              }
            }}
          />
          {customUrlError !== '' ? (
            <p className='text-red-500 text-sm italic'>{customUrlError}</p>
          ) : null}
        </div>
        {apiError != '' ? (
          <p className='text-red-500 text-sm italic mb-3'>
            {'Error: ' + apiError}
          </p>
        ) : null}
        <div className='flex items-center mb-4'>
          <button
            className='bg-yellow-500 w-full text-yellow-50 text-lg font-semibold 
          hover:bg-yellow-400 px-4 py-3 rounded-lg disabled:bg-yellow-400 '
            disabled={isLoading}
            onClick={shortenLink}
          >
            Shorten!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortenerCard;
