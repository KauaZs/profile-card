import React from 'react';

const HallFameCard = ({
    displayName,
    avatar,
    views,
    position
}: {
    displayName: string,
    avatar: string,
    views: number
    position: number
}) => {
  return (
    
      <article className='bg-slate-800 relative p-4 rounded-lg shadow-md '>
        <div className='flex items-center space-x-3 sm:max-h-screen'>
          <img
            src={avatar}
            alt='Profile'
            className='rounded-full h-24 border-2 border-slate-200'
          />
          <div>
            <h1 className='font-bold text-3xl'>{displayName}</h1>
            <button className='mt-1 rounded-2xl bg-slate-600 px-3 py-2  font-semibold shadow hover:bg-slate-950' onClick={() => window.location.pathname = '/u/' + displayName}>
              View Profile
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center'>
            <p className='text-sm text-gray-300 mt-2'>{views} views</p>
            <p className='justify-end text-sm text-gray-300'>#{position}</p>
        </div>
        </article>

  );
};

export default HallFameCard;
