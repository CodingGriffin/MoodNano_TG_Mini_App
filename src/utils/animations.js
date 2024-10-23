import { useEffect } from 'react';

export const useAnimateCharacter = (isAnimating, setIsAnimating) => {
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, setIsAnimating]);
};