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
    <div className={`footer-container fixed bottom-0 left-0 right-0 pt-2 pb-safe px-2 ${themes[theme].footer.background}`}>
      <div className="footer-frame flex justify-around items-center">
        <FooterButton 
          icon={HomeIcon} 
          label="HOME" 
          isActive={activePage === 'home'} 
          onClick={() => onPageChange('home')}
        />
        <FooterButton 
          icon={UserPlusIcon} 
          label="TASKS" 
          isActive={activePage === 'tasks'} 
          onClick={() => onPageChange('tasks')}
        />
        <FooterButton 
          icon={ChartBarIcon} 
          label="BOARD" 
          isActive={activePage === 'leaderboard'} 
          onClick={() => onPageChange('leaderboard')}
        />
        <FooterButton 
          icon={SparklesIcon} 
          label="POWER UPS" 
          isActive={activePage === 'powerups'} 
          onClick={() => onPageChange('powerups')}
        />
      </div>
    </div>
  );
};

export default Footer;