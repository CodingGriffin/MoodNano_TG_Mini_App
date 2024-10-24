import React from 'react';

const MoodStatusBg = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  let moodBg = null;
  switch (status) {
    case "sad":
      moodBg = isDarkMode ? "/assets/time/sad_mood_dark_bg.svg" : "/assets/time/sad_mood_light_bg.svg"
      break;
    case "netural":
      moodBg = isDarkMode ? "/assets/time/sad_mood_dark_bg.svg" : "/assets/time/netural_mood_light_bg.svg"
      break;
    case "happy":
      moodBg = isDarkMode ? "/assets/time/sad_mood_dark_bg.svg" : "/assets/time/happy_mood_light_bg.svg"
      break;             
    default: break;
  }

  return (<img src={moodBg} alt='mood background' />
);
};

export default MoodStatusBg;
