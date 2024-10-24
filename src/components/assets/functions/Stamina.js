import React from 'react';

const Stamina = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  const src = isDarkMode ? "/assets/functions/stamina_dark.svg" : "/assets/functions/stamina_light.svg";
  return (<img className='grow z-20 right-2 -top-4 absolute' alt='stamina function' src={src} />);
};

export default Stamina;
