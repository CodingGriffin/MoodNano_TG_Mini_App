import React from 'react';
import themes from './themes';

const MoodDisplay = ({ mood, isDarkMode }) => {
  const moodEmojis = {
    happy: '😊',
    neutral: '😐',
    sad: '😢'
  };

  const moodDescriptions = {
    happy: 'Feeling Great!',
    neutral: 'Doing Okay',
    sad: 'Feeling Down'
  };

  return (
    <div className="flex items-center">
      <div className="text-4xl mr-3">{moodEmojis[mood]}</div>
      <div>
        <div className={`text-lg font-semibold ${isDarkMode ? themes.dark.text.primary : themes.light.text.primary}`}>{moodDescriptions[mood]}</div>
        <div className={`text-xs ${isDarkMode ? themes.dark.text.secondary : themes.light.text.secondary}`}>Current Mood</div>
      </div>
    </div>
  );
};

export default MoodDisplay;