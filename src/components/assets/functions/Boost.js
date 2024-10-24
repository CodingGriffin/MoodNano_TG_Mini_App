import React from 'react';
import { ReactComponent as BoostDark } from "./boost_dark.svg"
import { ReactComponent as BoostLight } from "./boost_light.svg"

const Boost = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  const res = isDarkMode ? <BoostDark /> : <BoostLight />;
  return (<div className='grow z-20 right-7 top-20 absolute'>{res}</div>)
};

export default Boost;
