import React from 'react';
import Life from './assets/functions/Life';
import Bonus from './assets/functions/Bonus';
import Boost from './assets/functions/Boost';
import Stamina from './assets/functions/Stamina';

const Functions = ({ activePage, onPageChange, isDarkMode }) => {
  
  return (
    <div  className="items-center w-full realtive absolute top-2/4 h-1/3">
      <div className='flex grid-flow-row w-full relative mt-10'>
        <Life isDarkMode={isDarkMode} />
        <Bonus isDarkMode={isDarkMode} />
        <Boost isDarkMode={isDarkMode} />
        <Stamina isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Functions;