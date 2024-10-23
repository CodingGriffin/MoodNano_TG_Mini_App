import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Background = ({ emotionState }) => {
  const dominantEmotion = useMemo(() => {
    return Object.entries(emotionState).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  }, [emotionState]);

  const getBackgroundColor = () => {
    switch (dominantEmotion) {
      case 'joy': return 'bg-yellow-200';
      case 'calm': return 'bg-green-200';
      case 'excitement': return 'bg-red-200';
      case 'reflection': return 'bg-blue-200';
      default: return 'bg-gray-200';
    }
  };

  const getParticles = () => {
    switch (dominantEmotion) {
      case 'joy': return '🌟';
      case 'calm': return '🍃';
      case 'excitement': return '✨';
      case 'reflection': return '💭';
      default: return '•';
    }
  };

  return (
    <div className={`absolute inset-0 ${getBackgroundColor()} overflow-hidden`}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%' 
          }}
          animate={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%' 
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity 
          }}
        >
          {getParticles()}
        </motion.div>
      ))}
    </div>
  );
};

export default Background;