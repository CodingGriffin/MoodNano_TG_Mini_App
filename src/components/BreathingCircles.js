import React from 'react';


const BreathingCircles = ({ mood, isDarkMode }) => {
  const moodColors = {
    happy: ['bg-purple-300/30', 'bg-purple-400/40', 'bg-purple-500/50'],
    neutral: ['bg-blue-300/30', 'bg-blue-400/40', 'bg-blue-500/50'],
    sad: ['bg-indigo-300/30', 'bg-indigo-400/40', 'bg-indigo-500/50']
  };

  const glowColors = {
    happy: 'purple',
    neutral: 'blue',
    sad: 'indigo'
  };

  const colors = moodColors[mood] || moodColors.neutral;
  const glowColor = glowColors[mood] || glowColors.neutral;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className={`w-[180%] h-[100%] absolute animate-breathe rounded-full ${colors[2]}`}></div>
      <div className={`w-[160%] h-[160%] absolute animate-breathe rounded-full ${colors[1]}`} style={{ animationDelay: '0.5s' }}></div>
      <div className={`w-[140%] h-[160%] absolute animate-breathe rounded-full ${colors[0]}`} style={{ animationDelay: '1s' }}></div>
      <div className={`w-[100px] h-[100px] absolute rounded-full animate-glow`} style={{
        background: `radial-gradient(circle, ${glowColor} 1%, transparent 70%)`,
        animation: 'glow 2s ease-in-out infinite'
      }}></div>
    </div>
  );
};

export default BreathingCircles;