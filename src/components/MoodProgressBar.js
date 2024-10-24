import React from 'react';
import { FaceSmileIcon, FaceFrownIcon, MinusCircleIcon, MoonIcon } from '@heroicons/react/24/solid';

const MoodProgressBar = ({ mood, secondsUntilDecay, isInteracting, interactionCount }) => {
  const totalTaps = 40;

  // Calculate overall progress from sad to happy
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

  const filledProgress = getMoodProgress();

  const tapsUntilNextMood = (() => {
    const remainingTaps = 10 - (interactionCount % 10);
    if (mood === 'happy') return 0;
    return remainingTaps;
  })();

  const getStatusText = () => {
    if (isInteracting) {
      if (tapsUntilNextMood > 0) {
        // Show the next mood the character will progress to
        return `${tapsUntilNextMood} TAPS TO ${mood === 'sad' ? 'IDLE' : mood === 'idle' ? 'PLAYFUL' : mood === 'playful' ? 'HAPPY' : 'MAX'}`;
      }
      return 'MAX MOOD!';
    }
    return secondsUntilDecay > 0 ? `MOOD DECAYS IN ${secondsUntilDecay}S` : 'DECAYING';
  };

  const getMoodIcon = () => {
    switch (mood) {
      case 'sad':
        return <FaceFrownIcon className="h-5 w-5 mr-1 text-white" aria-hidden="true" />;
      case 'idle':
        return <MoonIcon className="h-5 w-5 mr-1 text-white" aria-hidden="true" />;
      case 'playful':
        return <MinusCircleIcon className="h-5 w-5 mr-1 text-white" aria-hidden="true" />;
      case 'happy':
        return <FaceSmileIcon className="h-5 w-5 mr-1 text-white" aria-hidden="true" />;
      default:
        return null;
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

  return (
    <div className="w-full bg-[#4291b4] rounded-[9px] p-2 sm:p-4">
      <div className="flex flex-col items-center justify-center w-full sm:w-40">
        <div className="flex items-center justify-center w-full font-saira font-semibold text-[#edefec] text-base sm:text-lg tracking-[0.36px] leading-tight">
          {getMoodIcon()}
          {mood.toUpperCase()}
        </div>
        <div className="relative w-full sm:w-[154px] h-[13.23px] mt-2">
          <div className="h-[13px] bg-[#73e6f0] rounded-[2.41px] backdrop-blur-[185.28px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(185.28px)_brightness(100%)]">
            <div className="relative w-full sm:w-[132px] h-[13px]">
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
              <div className="w-full sm:w-28 h-[13px] gap-[27.67px] absolute top-0 left-0 sm:left-5 flex items-center justify-between sm:justify-start">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="relative w-[1.2px] h-[13.23px] bg-[#4291b4]" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[154px] h-4 font-saira font-semibold text-[#edefec] text-xs text-center tracking-[0.28px] leading-tight truncate mt-2">
          {getStatusText()}
        </div>
      </div>
    </div>
  );
};

export default MoodProgressBar;