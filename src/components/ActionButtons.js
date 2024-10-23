import React from 'react';
import { BoltIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/solid';

const ActionButton = ({ icon: Icon, label, onClick, isActive, isDarkMode, mood }) => {
  return (
    <div className="action-button-wrapper">
      <div className="action-button">
        <div className="action-button-content">
          <div className="action-button-icon-wrapper">
            <Icon className="action-button-icon" />
          </div>
          <div className="action-button-label">{label}</div>
        </div>
        <div className="action-button-background" />
        <div className="action-button-glow" />
      </div>
    </div>
  );
};

const ActionButtons = ({ mood, energy, onInteraction, isDarkMode, questCooldown, points }) => {
  return (
    <div className="flex justify-between items-center space-x-1 w-full">
      <ActionButton 
        label="BOOST" 
        icon={BoltIcon}
        onClick={() => onInteraction('quest2x')} 
        isActive={questCooldown === 0}
        isDarkMode={isDarkMode}
        mood={mood}
      />
      <ActionButton 
        label="MEDITATE" 
        icon={HeartIcon}
        onClick={() => onInteraction('meditate')} 
        isActive={energy < 500}
        isDarkMode={isDarkMode}
        mood={mood}
      />
      <ActionButton 
        label="EVOLVE" 
        icon={SparklesIcon}
        onClick={() => onInteraction('evolve')} 
        isActive={points >= 10000}
        isDarkMode={isDarkMode}
        mood={mood}
      />
    </div>
  );
};

export default ActionButtons;