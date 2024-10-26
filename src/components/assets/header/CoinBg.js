import React from 'react';
import { ReactComponent as CoinDarkBg } from "./coin_dark_bg.svg"
import { ReactComponent as CoinLigthBg } from "./coin_light_bg.svg"

const CoinBg = ({ width = 178, height = 108, fillColor = '#211a6b', isDarkMode = true }) => {
  return (
    isDarkMode ? <CoinDarkBg/> : <CoinLigthBg/>
  );
};

export default CoinBg;
