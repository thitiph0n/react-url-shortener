import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeResult = (props) => {
  const { url } = props;

  const downloadQR = (e) => {
    e.preventDefault();
    const qrCodeURL = document
      .getElementById('qr-code')
      .toDataURL('image/jpg')
      .replace('image/jpg', 'image/octet-stream');
    console.log(qrCodeURL);
    let aEl = document.createElement('a');
    aEl.href = qrCodeURL;
    aEl.download = 'QR_Code.jpg';
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  return (
    <div className='flex flex-col items-center'>
      <QRCode fgColor='#7c2d12' id='qr-code' size={400} level='M' value={url} />
      <a
        onClick={downloadQR}
        className='mt-2 font-semibold cursor-pointer text-yellow-800'
      >
        Download QR
      </a>
    </div>
  );
};

export default QRCodeResult;
