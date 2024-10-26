import React from 'react';
import HeaderBackground from './assets/header/Background';
// import Coin from './assets/header/Coin';
import CoinBg from './assets/header/CoinBg';
// import Jewel from './assets/header/Jewel';
import JewelBg from './assets/header/JewelBg';
import SettingBtn from './assets/header/SettingBtn';

import { StarIcon } from '@heroicons/react/24/solid';

const Header = ({ points, isDarkMode, telegramUser }) => {
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  const getWidth = (points) => {
    const digits = points.toString().length;
    if (digits <= 3) return 'w-[85px]';
    if (digits <= 4) return 'w-[95px]';
    if (digits <= 5) return 'w-[105px]';
    return 'w-[115px]';
  };

  const calculateLevel = (points) => {
    return Math.floor(points / 10000) + 1;
  };

  const level = calculateLevel(points);
  return (
    <div className="items-center">
      {/* <div className='w-full absolute -top-3 z-10 opacity-1'>
        <HeaderBackground isDarkmode={isDarkMode} />
      </div> */}
      <div className='flex grid-flow-row w-full pt-4'>
        <div className='flex items-center w-40 justify-center'>
          <img className='flex z-20' src="/assets/header/avatar.svg" alt="avatar" />
          <div className='flex pl-2'>
            <div className='z-20'><JewelBg isDarkMode={isDarkMode} /></div>
            <div className="-ml-14 z-30 pt-1 w-4">
              {isDarkMode ?
                <>
                  <p className='text-xxs text-white font-extralight p-1 pt-2'>JOOY</p>
                  <p className='text-sm text-white'>567k</p>
                </>
                :
                <>
                  <p className='text-xxs text-black font-extralight p-1 pt-2'>JOOY</p>
                  <p className='text-sm text-black'>567k</p>
                </>
              }
            </div>
            <img className='flex z-20 ml-8' src="/assets/header/jewel.svg" alt='jewel' />
          </div>
        </div>
        <div className='grow'></div>
        <div className='flex items-center w-40 justify-center'>
          <div className='flex pr-2'>
            <img className='flex z-20 mr-4' src="/assets/header/coin.svg" alt="coin" />
            <div className="-mr-10 z-30 pt-1 w-4">
              {isDarkMode ?
                <>
                  <p className='text-xxs text-white font-extralight p-1 pt-2'>VIBE</p>
                  <p className='text-sm text-white'>231k</p>
                </>
                :
                <>
                  <p className='text-xxs text-black font-extralight p-1 pt-2'>VIBE</p>
                  <p className='text-sm text-black'>231k</p>
                </>
              }
            </div>
            <div className='z-20'><CoinBg isDarkMode={isDarkMode} /></div>

            {/* <img className='flex z-20 h-10' src="/assets/header/coin_bg.svg" alt='coin_background' /> */}
          </div>
          <div className='z-20'><SettingBtn isDarkMode={isDarkMode} /></div>
          {/* <img className='flex z-20' src="/assets/header/setting.svg" alt = "setting" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;