import React from 'react';

const Bonus = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkmode = true }) => {
  const src = isDarkmode ? "/assets/functions/bonus_dark.svg" : "/assets/functions/bonus_light.svg";
  return (<img className='grow z-20 left-7 top-20 absolute' alt='bonus function' src={src} />);
};

export default Bonus;
