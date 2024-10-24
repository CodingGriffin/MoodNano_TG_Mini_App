import React from 'react';
import { ReactComponent as BonusDark } from "./bonus_dark.svg"
import { ReactComponent as BonusLight } from "./bonus_light.svg"

const Bonus = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  const res = isDarkMode ? <BonusDark /> : <BonusLight />;
  return (<div className='grow z-20 left-7 top-20 absolute'>{res}</div>)
};

export default Bonus;
