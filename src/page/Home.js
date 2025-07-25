import React, { useState, useEffect, useCallback } from 'react';

import Character from '../components/Character';
import Functions from '../components/Functions';
import MoodDisplay from '../components/MoodDisplay';

const Home = ({ isDarkMode, setMood, mood }) => {

  const [energy, setEnergy] = useState(500);
  const [points, setPoints] = useState(0);
  const [interactionCount, setInteractionCount] = useState(0);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [secondsUntilDecay, setSecondsUntilDecay] = useState(120);
  const [isInteracting, setIsInteracting] = useState(false);
  const [questMultiplier, setQuestMultiplier] = useState(1);
  const [questCooldown, setQuestCooldown] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const timeSinceLastInteraction = (now - lastInteractionTime) / 1000;

      if (timeSinceLastInteraction >= 120) {
        setMood(prevMood => {
          if (prevMood === 'happy') return 'playful';
          if (prevMood === 'playful') return 'sad';
          // if (prevMood === 'idle') return 'sad'; // Add this line
          return prevMood;
        });
        setLastInteractionTime(now);
      } else {
        setSecondsUntilDecay(120 - Math.floor(timeSinceLastInteraction));
      }

      if (questCooldown > 0) {
        setQuestCooldown(prevCooldown => Math.max(0, prevCooldown - 1));
      }
      setEnergy(prevEnergy => Math.min(500, prevEnergy + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [lastInteractionTime, questCooldown, setMood]);

  const handleInteraction = useCallback((type) => {
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 500);

    let pointsEarned = 10 * questMultiplier;
    let energyCost = 10;
    let maxPoint = 1000;

    if (type === 'quest2x') {
      setQuestMultiplier(2);
      setQuestCooldown(300);
      return;
    } else if (type === 'meditate') {
      setEnergy(prevEnergy => Math.min(500, prevEnergy + 50));
      return;
    } else if (type === 'evolve') {
      if (points >= 10000) {
        setPoints(prevPoints => prevPoints - 10000);
        //   setLevel(prevLevel => prevLevel + 1);
      }
      return;
    }

    if (energy >= energyCost) {
      setEnergy(prevEnergy => prevEnergy - energyCost);
      setPoints(prevPoints => prevPoints + pointsEarned);
      setInteractionCount(prevCount => prevCount + 1);
      setLastInteractionTime(Date.now());

      if (interactionCount % 10 === 9) {
        setMood(prevMood => {
          // if (prevMood === 'sad') return 'idle';
          if (prevMood === 'sad') return 'playful';
          if (prevMood === 'playful') return 'happy';
          return prevMood;
        });
      }
    }
  }, [energy, interactionCount, points, questMultiplier]);

  return (
    <>
      <div className="w-full flex-grow flex flex-col">
        <div className='w-full'>
          <MoodDisplay isDarkMode={isDarkMode} interactionCount={interactionCount} energy={energy} points={points} mood={mood} />
        </div>
        <Functions isDarkMode={isDarkMode} />
        <div className="flex-grow flex items-center justify-center mb-6 sm:mb-6" style={{ marginBottom: '10%' }}>
          <div className="w-full aspect-square mx-auto rounded-lg overflow-visible relative" style={{ maxWidth: '130%' }}>
            <Character
              mood={mood}
              isAnimated={true}
              onTap={() => handleInteraction('encourage')}
              isInteracting={isInteracting}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;