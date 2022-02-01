import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const LinkResult = (props) => {
  const [copied, setCopied] = useState(false);

  const { url } = props;

  const copyToClipboad = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className='flex items-end flex-col'>
      <div className='relative w-full'>
        <input
          className='appearance-none block w-full bg-gray-100 text-gray-700 border
    rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-yellow-700 cursor-text'
          type='text'
          disabled
          value={url}
        />
        <button
          className='bg-yellow-500 w-16 text-yellow-50 text-lg font-semibold 
    hover:bg-yellow-400 px-5 py-3 rounded absolute right-0 top-0 border'
          onClick={copyToClipboad}
        >
          <Icon icon='mdi:content-copy' width={25} height={25} color='#fff' />
        </button>
      </div>
      {copied ? (
        <p className='text-green-500 text-sm mt-1'>Link Copied!</p>
      ) : null}
    </div>
  );
};

export default LinkResult;
