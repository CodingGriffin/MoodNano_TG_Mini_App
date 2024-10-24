import React from 'react';
import { ReactComponent as BottomDarkBg } from "./bottom_dark_bg.svg"
import { ReactComponent as BottomLightBg } from "./bottom_light_bg.svg"

const FooterBackground = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad", isDarkMode = true }) => {
  // let src = '';
  // switch (status) {
  //   case "sad":
  //     src = isDarkMode ? "/assets/footer/sad_dark_bg.png" : "/assets/footer/sad_light_bg.png";
  //     break;
  //   case "netural":
  //     src = isDarkMode ? "/assets/footer/netural_dark_bg.png" : "/assets/footer/netural_light_bg.png";
  //     break;
  //   case "happy":
  //     src = isDarkMode ? "/assets/footer/happy_dark_bg.png" : "/assets/footer/happy_light_bg.png";
  //     break;
  //   default: break;
  // }
  // return (<img className='p-0 m-0 w-full bottom-0 absolute z-10' alt='background' src={src} />);
  const res = isDarkMode ? <BottomDarkBg/> : <BottomLightBg/>
  return (<div className='p-0 m-0 w-full bottom-0 absolute z-10'>{res}</div>);
};

export default FooterBackground;
