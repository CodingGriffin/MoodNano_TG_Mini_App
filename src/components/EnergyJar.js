import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';

const EnergyJar = ({ energy }) => {
  const maxEnergy = 500;
  const percentage = Math.max(0, Math.min(100, (energy / maxEnergy) * 100));

  return (
    <div className="w-full bg-[#4291b4] rounded-[9px] p-2 sm:p-4">
      <div className="flex flex-col items-center justify-center w-full sm:w-40">
        <div className="flex items-center justify-center w-full font-saira font-semibold text-[#edefec] text-base sm:text-lg tracking-[0.36px] leading-tight">
          <BoltIcon className="h-5 w-5 mr-1" aria-hidden="true" />
          ENERGY
        </div>
        <div className="relative w-full sm:w-[154px] h-[13.23px] mt-2">
          <div className="h-[13px] bg-[#73e6f0] rounded-[2.41px] backdrop-blur-[185.28px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(185.28px)_brightness(100%)]">
            <div className="relative w-full sm:w-[132px] h-[13px]">
              <div 
                className="absolute top-0 left-0 h-full transition-all duration-500 ease-in-out"
                style={{ 
                  width: `${percentage}%`,
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/energy.png)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[154px] h-4 font-saira font-semibold text-[#edefec] text-xs text-center tracking-[0.28px] leading-tight truncate mt-2">
          {Math.round(energy)}/{maxEnergy}
        </div>
      </div>
    </div>
  );
};

export default EnergyJar;