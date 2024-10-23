import React from 'react';

const Functions = ({ activePage, onPageChange, isDarkMode }) => {
  
  return (
    <div  className="items-center w-full realtive absolute top-2/4 h-1/3">
      <div className='flex grid-flow-row w-full relative mt-10'>
        <img className='grow z-20 left-2 -top-4 absolute' src='/assets/functions/life.svg' alt='home' />
        <img className='grow z-20 left-7 top-20 absolute' src='/assets/functions/bonus.svg' alt='tasks' />
        <img className='grow z-20 right-7 top-20 absolute' src='/assets/functions/boost.svg' alt='board' />
        <img className='grow z-20 right-2 -top-4 absolute' src='/assets/functions/stamina.svg' alt='power_ups' />
      </div>
    </div>
  );
};

export default Functions;