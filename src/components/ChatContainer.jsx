import React from 'react';
import assets from '../assets/assets';

function ChatContainer({ setSelectedUser, SelectedUser }) {
  return SelectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        {/* Back arrow for mobile */}
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className='md:hidden w-7 cursor-pointer'
        />
        {/* Help icon for desktop */}
        <img
          src={assets.help_icon}
          alt=""
          className='max-md:hidden w-5 cursor-pointer'
        />
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-full text-center text-white'>
      <img src={assets.logo_icon} className='w-16 mb-3' alt="" />
      <p className='text-lg font-medium'>Chat anytime, anywhere</p>
    </div>
  );
}

export default ChatContainer;
