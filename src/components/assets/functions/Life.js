import React from 'react';

const Life = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  const src = isDarkMode ? "/assets/functions/life_dark.svg" : "/assets/functions/life_light.svg";
  return (<img className='grow z-20 left-2 -top-4 absolute' alt='life function' src={src} />);
};

export default Life;
