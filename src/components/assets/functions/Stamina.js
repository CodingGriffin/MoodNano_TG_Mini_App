import React from 'react';
import { ReactComponent as StaminaDark } from "./stamina_dark.svg";
import { ReactComponent as StaminaLight } from "./stamina_light.svg";

const Stamina = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  const res = isDarkMode ? <StaminaDark /> : <StaminaLight />;
  return (<div className='grow z-20 right-2 -top-4 absolute'>{res}</div>)
};

export default Stamina;
