import React from 'react';
import themes from './themes';
import { StarIcon } from '@heroicons/react/24/solid';


const TaskItem = ({ icon, text, reward, onClaim, claimed, isDarkMode }) => {
  const theme = isDarkMode ? themes.dark : themes.light;
  
  return (
    <div className={`${theme.glassEffect} rounded-xl p-3 mb-3 flex items-center justify-between`}>
      <div className="flex items-center">
        <div className={`${theme.accentBackground} p-2 rounded-lg mr-3 w-8 h-8 flex items-center justify-center`}>
          <span className={`text-xl ${theme.text.accent}`}>{icon}</span>
        </div>
        <span className={`${theme.text.primary} font-medium text-sm`}>{text}</span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-2">
          <StarIcon className="w-4 h-4 text-yellow-500 mr-1" />
          <span className={`${theme.text.primary} font-bold text-sm`}>{reward}</span>
        </div>
        {!claimed ? (
          <button 
            className={`${theme.button.active} px-3 py-1 rounded-md text-xs font-bold shadow-md transform transition-transform duration-100 active:translate-y-0.5 active:shadow-sm`}
            onClick={onClaim}
          >
            CLAIM
          </button>
        ) : (
          <span className={`${theme.text.secondary} text-xs font-medium`}>CLAIMED</span>
        )}
      </div>
    </div>
  );
};

const Tasks = ({ isDarkMode, onClaimX, onClaimYouTube, xClaimed, youtubeClaimed }) => {
  const theme = isDarkMode ? themes.dark : themes.light;

  const handleClaim = (task) => {
    console.log(`Claimed ${task}`);
    // Add your claim logic here
  };

  return (
    <div className={`${theme.containerBg} min-h-screen p-4 max-w-md mx-auto`}>
      <h2 className={`${theme.text.primary} text-xl font-bold mb-2`}>TASKS</h2>
      <p className={`${theme.text.secondary} text-sm mb-4`}>Complete Tasks To Earn More Stars</p>

      <TaskItem icon="✉" text="Follow Our Discord" reward="500" onClaim={() => handleClaim('Discord')} claimed={false} isDarkMode={isDarkMode} />
      <TaskItem icon="♠" text="Follow Our Twitter" reward="500" onClaim={onClaimX} claimed={xClaimed} isDarkMode={isDarkMode} />
      <TaskItem icon="▶" text="Subscribe Our Channel" reward="500" onClaim={onClaimYouTube} claimed={youtubeClaimed} isDarkMode={isDarkMode} />
      <TaskItem icon="♦" text="Play For 2 Hours" reward="500" onClaim={() => handleClaim('Play')} claimed={false} isDarkMode={isDarkMode} />
      <TaskItem icon="↓" text="Download Our App" reward="500" onClaim={() => handleClaim('Download')} claimed={false} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Tasks;