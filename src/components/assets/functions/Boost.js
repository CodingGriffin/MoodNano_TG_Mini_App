import React from 'react';

const Boost = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkmode = true }) => {
  const src = isDarkmode ? "/assets/functions/boost_dark.svg" : "/assets/functions/boost_light.svg";
  return (<img className='grow z-20 right-7 top-20 absolute' alt='boost function' src={src} />);
};

export default Boost;
