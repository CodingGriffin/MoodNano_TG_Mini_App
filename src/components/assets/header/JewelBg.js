import React from 'react';
import { ReactComponent as JewelDarkBg } from "./jewel_dark_bg.svg"
import { ReactComponent as JewelLigthBg } from "./jewel_light_bg.svg"

const JewelBg = ({ width = 178, height = 108, fillColor = '#211a6b', isDarkMode = true }) => {
  return (
    isDarkMode ? <JewelDarkBg /> : <JewelLigthBg/>

  );
};

export default JewelBg;
