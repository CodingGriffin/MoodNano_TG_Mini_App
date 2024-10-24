import React from 'react';
import { ReactComponent as SadMoodDarkBg } from "./sad_mood_dark_bg.svg"
import { ReactComponent as SadMoodLightBg } from "./sad_mood_light_bg.svg"
import { ReactComponent as NeturalMoodDarkBg } from "./netural_mood_dark_bg.svg"
import { ReactComponent as NeturalMoodLightBg } from "./netural_mood_light_bg.svg"
import { ReactComponent as HappyMoodDarkBg } from "./happy_mood_dark_bg.svg"
import { ReactComponent as HappyMoodLightBg } from "./happy_mood_light_bg.svg"

const MoodStatusBg = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  let moodBg = null;
  switch (status) {
    case "sad":
      moodBg = isDarkMode ? <SadMoodDarkBg /> : <SadMoodLightBg />
      break;
    case "netural":
      moodBg = isDarkMode ? <NeturalMoodDarkBg /> : <NeturalMoodLightBg />
      break;
    case "happy":
      moodBg = isDarkMode ? <HappyMoodDarkBg /> : <HappyMoodLightBg />
      break;             
    default: break;
  }

  return (moodBg);
};

export default MoodStatusBg;
