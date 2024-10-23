import React from 'react';
import themes from './themes';

const MoodDisplay = ({ mood, isDarkMode,  interactionCount }) => {
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
      <div className='flex grid-flow-row w-72'>
        <img className='absolute left-6 -top-11 z-10' src='/assets/mood/rectangle.svg' alt='sad_rectangle' />
        <p className='absolute left-18 -top-7 z-10 text-xs text-white'>😢SAD</p>
        <div className="absolute left-12 -top-1 z-20 relative w-2/3 h-[13.23px]">
          <div className="h-[10px] bg-[#29273E] rounded-[4px] backdrop-blur-[185.28px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(185.28px)_brightness(100%)]">
            {/* <div className="relative w-full sm:w-[75px] h-[13px]">
              <div
                className="absolute top-0 left-0 h-full transition-all duration-500 ease-in-out"
                style={{
                  width: `${filledProgress}%`,
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/energy.png)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  filter: `brightness(${intensity}) saturate(${intensity})`,
                  opacity: intensity
                }}
              ></div>
            </div> */}
            <div className="w-full sm:w-20 h-[10px] gap-[27.67px] absolute top-0 left-0 sm:left-1/3 flex items-center justify-between sm:justify-start">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="relative w-[1px] h-[10px] bg-black" />
              ))}
            </div>            
          </div>
        </div>
      </div>
      <div className='flex grow w-full items-center relative -top-8 w-full'>
        <img className='absolute -top-12 left-1/2 transform -translate-x-1/2 z-20' src='/assets/time/out_rectangle.svg' alt='time_out_rectangle'/>
        <img className='absolute -top-8 left-1/2 transform -translate-x-1/2 z-20' src='/assets/time/in_rectangle.svg' alt='time_in_rectangle'/>
        <img className='absolute -top-20 left-1/2 transform -translate-x-1/2 z-20' src='/assets/time/mood_background.svg' alt='mood_background'/>
        <p className='absolute -top-15 left-1/2 transform -translate-x-1/2 z-30 text-4xl text-white'>😢</p>
        <p className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-30 text-3xl text-white'>01:30</p>
        <p className='absolute top-7 left-1/2 transform -translate-x-1/2 z-30 text-xxs text-white font-extralight'>SECONDS</p>
      </div>
      <div className='flex grid-flow-row w-72'>
        <img className='absolute right-5 -top-11 z-10' src='/assets/energy/rectangle.svg' alt='energy_rectangle' />
        <p className='absolute right-16 -top-7 z-20 text-xs text-white'>😊ENERGY</p>
        <div className="absolute right-1 -mt-2 z-20 relative w-2/3 h-[13.23px]">
          <div className="h-[10px] bg-[#29273E] rounded-[4px] backdrop-blur-[185.28px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(185.28px)_brightness(100%)]">
            {/* <div className="relative w-full sm:w-[75px] h-[13px]">
              <div
                className="absolute top-0 left-0 h-full transition-all duration-500 ease-in-out"
                style={{
                  width: `${filledProgress}%`,
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/energy.png)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  filter: `brightness(${intensity}) saturate(${intensity})`,
                  opacity: intensity
                }}
              ></div>
            </div> */}
            <div className="w-full sm:w-20 h-[10px] gap-[27.67px] absolute top-0 left-0 sm:left-1/3 flex items-center justify-between sm:justify-start">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="relative w-[1px] h-[10px] bg-black" />
              ))}
            </div>    
          </div>
        </div>        
      </div>
    </div>
  );
};

export default MoodDisplay;