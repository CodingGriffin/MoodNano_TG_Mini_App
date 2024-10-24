import React from 'react';

const FooterBackground = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkmode = true }) => {
  let src = '';
  switch (status) {
    case "sad":
      src = isDarkmode ? "/assets/footer/sad_dark_bg.png" : "/assets/footer/sad_light_bg.png";
      break;
    case "netural":
      src = isDarkmode ? "/assets/footer/netural_dark_bg.png" : "/assets/footer/netural_light_bg.png";
      break;
    case "happy":
      src = isDarkmode ? "/assets/footer/happy_dark_bg.png" : "/assets/footer/happy_light_bg.png";
      break;
    default: break;
  }
  return (<img className='p-0 m-0 w-full bottom-0 absolute z-10' alt='background' src={src} />);
};

export default FooterBackground;
