import React from 'react';
import { HomeIcon, UserPlusIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/solid';
import FooterBackground from './assets/footer/Background';
import { ReactComponent as HomeLightBtn } from "./assets/footer/home_light_btn.svg"
import { ReactComponent as HomeDarkBtn } from "./assets/footer/home_dark_btn.svg"
import { ReactComponent as TasksLightBtn } from "./assets/footer/tasks_light_btn.svg"
import { ReactComponent as TasksDarkBtn } from "./assets/footer/tasks_dark_btn.svg"
import { ReactComponent as ShopLightBtn } from "./assets/footer/shop_light_btn.svg"
import { ReactComponent as ShopDarkBtn } from "./assets/footer/shop_dark_btn.svg"
import { ReactComponent as BoardLightBtn } from "./assets/footer/board_light_btn.svg"
import { ReactComponent as BoardDarkBtn } from "./assets/footer/board_dark_btn.svg"
import { ReactComponent as PowerLightBtn } from "./assets/footer/power_light_btn.svg"
import { ReactComponent as PowerDarkBtn } from "./assets/footer/power_dark_btn.svg"

import themes from './themes';
const FooterButton = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <div
      className={`footer-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="footer-button-content">
        <Icon className="footer-icon h-6 w-6" />
        <div className="footer-label text-xs">{label}</div>
      </div>
    </div>
  );
};

const Footer = ({ activePage, onPageChange, isDarkMode }) => {
  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <div className="absolute bottom-0 right-0 w-full">
      <div className='w-full'>
        <FooterBackground isDarkMode={isDarkMode} />
      </div>
      {isDarkMode ?
        <div className='flex '>
          <div className='grow z-20 mt-3' onClick={() => onPageChange('home')}><HomeDarkBtn /></div>
          <div className='grow z-20' onClick={() => onPageChange('tasks')}><TasksDarkBtn /></div>
          <div className='grow z-20 -mt-7' onClick={() => onPageChange('shop')}><ShopDarkBtn /></div>
          <div className='grow z-20' onClick={() => onPageChange('leaderboard')}><BoardDarkBtn /></div>
          <div className='grow z-20 mt-3' onClick={() => onPageChange('powerups')}><PowerDarkBtn /></div>
        </div>
        :
        <div className='flex'>
          <div className='grow z-20 mt-3 w-[20%] items-center justify-center flex' onClick={() => onPageChange('home')}><HomeLightBtn /></div>
          <div className='grow z-20 w-[20%] items-center justify-center flex' onClick={() => onPageChange('tasks')}><TasksLightBtn /></div>
          <div className='grow z-20 -mt-7 w-[30%] items-center justify-center flex' onClick={() => onPageChange('shop')}><ShopLightBtn /></div>
          <div className='grow z-20 w-[20%] items-center justify-center flex' onClick={() => onPageChange('leaderboard')}><BoardLightBtn /></div>
          <div className='grow z-20 mt-3 w-[20%] items-center justify-center flex' onClick={() => onPageChange('powerups')}><PowerLightBtn /></div>
        </div>
      }
    </div>
  );
};

export default Footer;