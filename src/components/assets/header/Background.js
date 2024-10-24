import React from 'react';

const HeaderBackground = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkmode = true }) => {
  const src = isDarkmode ? "/assets/header/header_dark_bg.png" : "/assets/header/header_light_bg.png";

  // switch (status) {
  //   case "sad":
  //     src = isDarkmode ? "/assets/header/sad_dark_bg.png" : "/assets/header/sad_light_bg.png";
  //     break;
  //   case "netural":
  //     src = isDarkmode ? "/assets/header/netural_dark_bg.png" : "/assets/header/netural_light_bg.png";
  //     break;
  //   case "happy":
  //     src = isDarkmode ? "/assets/header/happy_dark_bg.png" : "/assets/header/happy_light_bg.png";
  //     break;
  //   default: break;
  // }
  return (<img className='flex w-full' alt='background' src={src} />);
};

export default HeaderBackground;
