import React from 'react';

const ProgressBar = ({ progress = 100, className = '' }) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full ${className}`}>
      <svg
        className="w-full"
        height="20"
        viewBox="0 0 300 20"
      >
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y1="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>

          <clipPath id={`progressClip-${progress}`}>
            <rect
              x="0"
              y="0"
              width={`${clampedProgress * 3}`}
              height="20"
              rx="10"
              ry="10"
            />
          </clipPath>
        </defs>

        {/* Background track */}
        <rect
          x="0"
          y="0"
          width="300"
          height="20"
          rx="10"
          ry="10"
          fill="#8B5CF6"
          opacity="0.2"
        />

        {/* Progress indicator */}
        <rect
          x="0"
          y="0"
          width={`${clampedProgress * 3}`}
          height="20"
          rx="10"
          ry="10"
          fill="url(#progressGradient)"
        />

        {/* Dots pattern */}
        <g clipPath={`url(#progressClip-${progress})`}>
          {/* Center row dots */}
          {[...Array(10)].map((_, i) => (
            <circle
              key={`center-${i}`}
              cx={10 + (i * 30)}
              cy="10"
              r="1"
              fill="white"
              opacity="0.1"
            />
          ))}

          {/* Top row dots */}
          {[...Array(10)].map((_, i) => (
            <circle
              key={`top-${i}`}
              cx={25 + (i * 30)}
              cy="5"
              r="1"
              fill="white"
              opacity="0.1"
            />
          ))}

          {/* Bottom row dots */}
          {[...Array(10)].map((_, i) => (
            <circle
              key={`bottom-${i}`}
              cx={25 + (i * 30)}
              cy="15"
              r="1"
              fill="white"
              opacity="0.1"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default ProgressBar;
