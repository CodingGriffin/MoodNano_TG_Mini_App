import React from 'react';
import { HomeIcon, UserPlusIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/solid';

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
    <div  className="items-center">
      <div className='w-full'>
        <img className='p-0 m-0 w-full bottom-0 absolute z-10' src="/assets/footer/background.png" alt = "footer_in_bg"  />
      </div>
      <div className='flex grid-flow-row w-full'>
        <img onClick={() => onPageChange('home')} className='grow z-20 mt-3' src='/assets/footer/home_btn.svg' alt='home' />
        <img onClick={() => onPageChange('tasks')} className='grow z-20' src='/assets/footer/tasks_btn.svg' alt='tasks' />
        <img onClick={() => onPageChange('shop')} className='grow z-20 -mt-12' src='/assets/footer/shop_btn.svg' alt='shop' />
        <img onClick={() => onPageChange('leaderboard')} className='grow z-20' src='/assets/footer/board_btn.svg' alt='board' />
        <img onClick={() => onPageChange('powerups')} className='grow z-20 mt-3' src='/assets/footer/power_ups_btn.svg' alt='power_ups' />
      </div>
    </div>
  );
};

export default Footer;