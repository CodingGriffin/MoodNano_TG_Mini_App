import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { logError, logToTelegram } from '../utils/errorLogger';

const Character = ({ mood, onTap, isDarkMode, isInteracting }) => {
  const [animationFormat, setAnimationFormat] = useState('webm');
  const [currentFrame, setCurrentFrame] = useState(0);
  const [pngFrames, setPngFrames] = useState({});
  const [displayedMood, setDisplayedMood] = useState(mood);
  const [showLoader, setShowLoader] = useState(true);
  const [firstFramesLoaded, setFirstFramesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const frameIndexRef = useRef(0);
  const gsapContextRef = useRef(null);

  const moodAnimations = useMemo(() => ({
    idle: {
      webm: '/assets/sad.webm',
      frameCount: 56, // Assuming 30 fps, 2 seconds would be 60 frames
    },
    sad: {
      webm: '/assets/sad.webm',
      frameCount: 187,
    },
    playful: {
      webm: '/assets/playful.webm',
      frameCount: 176,
    },
    happy: {
      webm: '/assets/happy.webm',
      frameCount: 168,
    }
  }), []);

  const pngFps = 30;

  const isIOSOrSafariOrMac = useMemo(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isSafari = /safari/.test(ua) && !/chrome/.test(ua);
    const isMac = /macintosh/.test(ua);
    const isChrome = /chrome/.test(ua);
    return isIOS || isSafari || (isMac && !isChrome);
  }, []);

  useEffect(() => {
    if (isIOSOrSafariOrMac) {
      setAnimationFormat('png');
    } else {
      setAnimationFormat('webm');
    }
  }, [isIOSOrSafariOrMac]);

  const loadPNGFrames = useCallback((moodToLoad) => {
    return new Promise((resolve) => {
      const frames = [];
      const frameCount = moodAnimations[moodToLoad].frameCount;
      let loadedCount = 0;

      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          resolve(frames);
        }
      };

      for (let i = 1; i <= frameCount; i++) {
        const paddedIndex = String(i).padStart(3, '0');
        const imageUrl = `/assets/${moodToLoad === 'idle' ? 'sad' : moodToLoad}/${paddedIndex}.png`;
        const img = new Image();
        img.onload = onImageLoad;
        img.src = imageUrl;
        frames.push(img);
      }
    });
  }, [moodAnimations]);

  useEffect(() => {
    if (animationFormat === 'png' && !firstFramesLoaded) {
      const loadAllMoods = async () => {
        const moods = ['idle', 'sad', 'playful', 'happy'];
        const loadedFrames = {};

        for (const mood of moods) {
          loadedFrames[mood] = await loadPNGFrames(mood);
        }
        // Add idle frames (first 60 frames of sad)
        loadedFrames['idle'] = loadedFrames['sad'].slice(0, 56);

        setPngFrames(loadedFrames);
        setFirstFramesLoaded(true);
        setShowLoader(false);
      };

      loadAllMoods();
    } else if (animationFormat === 'webm') {
      setShowLoader(false);
    }
  }, [animationFormat, firstFramesLoaded, loadPNGFrames]);

  useEffect(() => {
    if (mood !== displayedMood) {
      setIsTransitioning(true);
      setDisplayedMood(mood);
      frameIndexRef.current = 0;
      setCurrentFrame(0);

      if (gsapContextRef.current) {
        gsapContextRef.current.kill();
      }

      gsapContextRef.current = gsap.context(() => {
        if (animationFormat === 'webm' && videoRef.current) {
          gsap.to(videoRef.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              videoRef.current.src = moodAnimations[mood].webm;
              videoRef.current.play();
              gsap.to(videoRef.current, { opacity: 1, duration: 0.2 });
            }
          });
        } else if (animationFormat === 'png' && canvasRef.current) {
          gsap.to(canvasRef.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              frameIndexRef.current = 0;
              setCurrentFrame(0);
              gsap.to(canvasRef.current, { opacity: 1, duration: 0.2 });
            }
          });
        }
      });
    }
  }, [mood, displayedMood, animationFormat, moodAnimations]);

  useEffect(() => {
    if (animationFormat === 'png' && pngFrames[displayedMood]?.length > 0) {
      const frameDuration = 1000 / pngFps;
      let lastFrameTime = performance.now();

      const animate = () => {
        const now = performance.now();
        const elapsed = now - lastFrameTime;

        if (elapsed >= frameDuration) {
          // Update frame index based on the current mood
          if (displayedMood === 'idle') {
            // For idle, loop through the first 60 frames
            frameIndexRef.current = (frameIndexRef.current + 1) % 60;
          } else {
            // For other moods, use the full animation
            frameIndexRef.current = (frameIndexRef.current + 1) % pngFrames[displayedMood].length;
          }
          setCurrentFrame(frameIndexRef.current);
          lastFrameTime = now - (elapsed % frameDuration);

          if (frameIndexRef.current === 0 && isTransitioning) {
            setIsTransitioning(false);
          }
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [displayedMood, animationFormat, pngFrames, pngFps, isTransitioning]);

  const handleWebmError = (error) => {
    console.error('WebM loading failed:', error);
    logToTelegram('error', `WebM loading failed for mood: ${mood}`);
    setAnimationFormat('png');
  };

  const handleTap = () => {
    try {
      onTap();
    } catch (error) {
      logError(error);
      logToTelegram('error', `Error in handleTap: ${error.message}`);
    }
  };

  const getContrastBrightness = () => {
    return isDarkMode ? 'dark-mode' : 'light-mode';
  };

  const renderLoader = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const renderCharacter = () => {
    const commonStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      transform: 'scale(1.5)', // Increase this value to make the character larger
      transformOrigin: 'center' // This will keep the bottom of the character in place while scaling
    };
    if (animationFormat === 'webm') {
      return (
        <video
          ref={videoRef}
          src={moodAnimations[displayedMood].webm}
          loop
          muted
          playsInline
          autoPlay
          className={`video-mask character-element ${getContrastBrightness()}`}
          style={commonStyle}
          onError={handleWebmError}
          onTimeUpdate={(e) => {
            // Add this condition to loop the first 2 seconds for 'idle' mood
            if (displayedMood === 'idle' && e.target.currentTime >= 2) {
              e.target.currentTime = 0;
            }
          }}
        />
      );
    } else if (pngFrames[displayedMood]?.length > 0) {
      return (
        <canvas
          ref={canvasRef}
          className={`character-element ${getContrastBrightness()}`}
          style={commonStyle}
        />
      );
    }
    return null;
  };

  useEffect(() => {
    if (canvasRef.current && pngFrames[displayedMood]?.[currentFrame]) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = pngFrames[displayedMood][currentFrame];

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }
  }, [displayedMood, currentFrame, pngFrames]);

  try {
    return (
      <div className="relative w-full h-full">
        <div
          className="w-full h-full flex flex-col items-center justify-end cursor-pointer character-container"
          onClick={handleTap}
          style={{
            maxHeight: 'calc(100vh - 80px)',
            zIndex: 1,
            overflow: 'visible', // Allow character to overflow its container
            marginBottom: '-10%' // Move the character up
          }}
        >
          <div className={`flex-grow flex items-center justify-center ${isInteracting ? 'interacting' : ''}`} style={{ transform: 'translateY(-1%)' }}>
            {showLoader ? renderLoader() : renderCharacter()}
          </div>
        </div>
        <div className="character-shadow-container">
          <img
            src="/assets/shad.png"
            alt="Character Shadow"
            className="character-shadow bleu-shadow"
            style={{
              width: '100vw',
              maxWidth: 'none',
              height: 'auto',
              opacity: 0.2,
              filter: 'blur(10px) brightness(0) saturate(100%) hue-rotate(180deg)',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%) translateY(20px)',
            }}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in Character render:', error);
    logError(error);
    logToTelegram('error', `Error in Character render: ${error.message}\nStack: ${error.stack}`);
    return <div>Error rendering character: {error.message}</div>;
  }
};

export default Character;