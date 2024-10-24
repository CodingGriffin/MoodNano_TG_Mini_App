import React from 'react';
import { ReactComponent as LifeDark } from "./life_dark.svg"
import { ReactComponent as LifeLight } from "./life_light.svg"

const Life = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  const res = isDarkMode ? <LifeDark /> : <LifeLight />;
  return (<div className='grow z-20 left-2 -top-4 absolute'>{res}</div>)
};

export default Life;
