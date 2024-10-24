import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'phosphor-react';

const LoadingScreen = ({ onFinish }) => {
  const [stage, setStage] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          if (stage < 3) {
            setStage(stage + 1);
            return 0;
          } else {
            setTimeout(onFinish, 1000);
            return 100;
          }
        }
        return Math.min(oldProgress + 0.5, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [stage, onFinish]);

  const getContent = () => {
    switch (stage) {
      case 1:
        return {
          video: 'sad.webm',
          title: 'Waking Up',
          feeling: 'Sleepy',
          subtitle: 'Your companion is waking up'
        };
      case 2:
        return {
          video: 'frisky.webm',
          title: 'Getting Ready',
          feeling: 'Energetic',
          subtitle: 'Your Companion is preparing for the day'
        };
      case 3:
        return {
          video: 'happy.webm',
          title: 'Ready to Play',
          feeling: 'Excited',
          subtitle: 'Your companion can\'t wait to see you!'
        };
      default:
        return {};
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        className="w-full max-w-md rounded-3xl shadow-xl overflow-hidden flex flex-col"
        style={{ height: '812px', backgroundColor: 'var(--card-background)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4">
          <ArrowLeft size={24} color="var(--text-primary)" />
        </div>

        <div className="flex-grow flex flex-col">
          <div className="flex-grow relative overflow-hidden mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`video-${stage}`}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  src={`/assets/${content.video}`}
                  className="w-full h-full object-cover object-top"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="px-6 pb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${stage}`}
                className="text-2xl font-bold text-[var(--text-primary)] mb-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {content.title}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`feeling-${stage}`}
                className="text-lg text-[var(--text-secondary)] text-center mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I'm feeling {content.feeling}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${stage}`}
                className="text-sm text-[var(--text-secondary)] text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {content.subtitle}
              </motion.p>
            </AnimatePresence>

            <motion.div
              className="w-full bg-[var(--app-background)] h-2 rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-[var(--level-progress-bar-fill)]"
                style={{ width: `${progress}%` }}
                transition={{ type: 'spring', stiffness: 50 }}
              />
            </motion.div>
          </div>
        </div>

        {stage === 3 && progress === 100 && (
          <motion.button
            className="w-full bg-[var(--button-background)] text-[var(--text-primary)] py-4 text-lg font-semibold"
            onClick={onFinish}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default LoadingScreen;