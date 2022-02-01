import React from 'react';
import { Icon } from '@iconify/react';
import QRCodeResult from './QRCodeResult';
import LinkResult from './LinkResult';

const ResultCard = (props) => {
  const { url } = props;

  return (
    <div className='flex justify-center items-center'>
      <div className='mx-2 mt-5 bg-white w-full max-w-[500px] rounded-lg shadow-lg px-5 py-4 mb-5'>
        <div className='py-3 flex flex-row items-center'>
          <Icon
            icon='mdi:link-variant'
            width={25}
            height={25}
            color='#7c2d12'
          />
          <h2 className='pl-1 text-lg font-semibold text-yellow-800'>
            Your shorten Link is ready
          </h2>
        </div>
        <LinkResult url={url} />
        <div className='py-3 flex flex-row items-center mb-2'>
          <Icon icon='mdi:qrcode' width={25} height={25} color='#7c2d12' />
          <h2 className='pl-1 text-lg font-semibold text-yellow-800'>
            QR Code
          </h2>
        </div>
        <QRCodeResult url={url} />
      </div>
    </div>
  );
};

export default ResultCard;
