import React from 'react';
import { Icon } from '@iconify/react';

const NavBar = () => {
  return (
    <div className='w-full bg-white h-16 shadow-md flex items-center justify-center px-3 fixed'>
      <div className='flex flex-row items-center cursor-pointer'>
        <Icon icon='emojione-v1:speak-no-evil-monkey' width='40' height='40' />
        <h1 className='ml-1 text-2xl font-bold uppercase text-yellow-800'>
          Links
        </h1>
      </div>
      {/* <button className='bg-orange-400 text-white font-semibold hover:bg-orange-300 px-4 py-2 rounded-lg '>
        Login
      </button> */}
    </div>
  );
};

export default NavBar;
