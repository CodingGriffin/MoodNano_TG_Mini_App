import React from 'react';
import ProgressBar from './progress-bar-react';
import MoodStatusBg from './assets/time/mood_status_bg';
import MoodStatus from './assets/time/mood';
import Energy from './assets/energy/energy';
import MixedBg from './assets/time/mixed_bg';

import themes from './themes';
import { progress } from 'framer-motion';

const MoodDisplay = ({ mood, isDarkMode=true,  interactionCount }) => {
  const moodEmojis = {
    happy: '😊',
    neutral: '😐',
    sad: '😢'
  };
  const totalTaps = 40;

  const moodDescriptions = {
    happy: 'Feeling Great!',
    neutral: 'Doing Okay',
    sad: 'Feeling Down'
  };

  const getMoodProgress = () => {
    const progress = (interactionCount % totalTaps) * (100 / totalTaps);
    switch (mood) {
      case 'sad': return Math.min(100, progress);
      case 'idle': return Math.min(100, 25 + progress);
      case 'playful': return Math.min(100, 50 + progress);
      case 'happy': return Math.min(100, 75 + progress);
      default: return 0;
    }
  };

  const getIntensity = () => {
    switch (mood) {
      case 'playful': return 1.2; // Increase intensity for playful
      case 'happy': return 1.4; // Increase intensity even more for happy
      default: return 1; // Normal intensity for other moods
    }
  };

  const intensity = getIntensity();
  const filledProgress = getMoodProgress();

  return (
    <div className="flex items-center relative mt-8">
      <div className='w-full absolute -top-200 mb-12 left-1/2 transform -translate-x-1/2 z-10'><MixedBg /></div>
      <div className='flex grid-flow-row w-72'>
        {/* <div className='absolute left-6 -top-11 z-10'><MoodBg isDarkMode={isDarkMode} /></div> */}
        <p className='absolute flex grid-flow-row left-16 -top-7 z-10 text-xs pt-1'>
          <div className='w-4 h-4 mx-0.5'><MoodStatus /></div>
          {isDarkMode ? 
            <p className='text-white'>SAD</p>
            :
            <p className='text-black'>SAD</p>
          }
        </p>
        <div className="absolute left-12 -top-3 z-20 relative w-2/3 h-[13.23px]">
            <ProgressBar progress= {30} className= "qwe" />
        </div>
      </div>
      <div className='flex grow w-full items-center relative -top-8 w-full'>
        {/* <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 z-20'><TimeBg isDarkMode={isDarkMode} /></div> */}
        <div className='absolute -top-20 left-1/2 transform -translate-x-1/2 z-20' ><MoodStatusBg status = {mood} isDarkMode = {isDarkMode} /></div>
        <div className='absolute -top-14 left-1/2 transform -translate-x-1/2 z-30'><MoodStatus status = {mood} /></div>
        {isDarkMode ? 
          <>
            <p className='absolute -top-2 left-1/2 transform -translate-x-1/2 z-30 text-3xl text-white'>01:30</p>
            <p className='absolute top-8 left-1/2 transform -translate-x-1/2 z-30 text-xxs text-white font-extralight'>SECONDS</p>
          </>
          :
          <>
            <p className='absolute -top-2 left-1/2 transform -translate-x-1/2 z-30 text-3xl text-black'>01:30</p>
            <p className='absolute top-8 left-1/2 transform -translate-x-1/2 z-30 text-xxs text-black font-extralight'>SECONDS</p>
          </>
        }
      </div>
      <div className='flex grid-flow-row w-72'>
        {/* <div className='absolute right-6 -top-11 z-10'><EnergyBg isDarkMode={isDarkMode} /></div> */}
        <p className='absolute flex grid-flow-row right-15 -top-7 z-20 text-xs text-white pt-1'>
          <div className='w-3 h-3 mx-0.5 pt-1'><Energy /></div>
          {isDarkMode ? 
            <p className='text-white'>ENERGY</p>
            :
            <p className='text-black'>ENERGY</p>
          }
        </p>
        <div className="absolute right-2 -top-3 z-20 relative w-2/3 h-[13.23px]">
            <ProgressBar progress= {30} className= "qwe" />
        </div>        
      </div>
    </div>
  );
};

export default MoodDisplay;