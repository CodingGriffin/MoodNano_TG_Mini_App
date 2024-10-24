import React from 'react';

const MoodStatus = ({ width = 178, height = 108, fillColor = '#211a6b', status = "sad" }) => {
  let img_src = ""
  switch (status) {
    case "sad":
      img_src = "/assets/mood/sad.png";
      break;
    case "netural":
      img_src = "/assets/mood/netural.png";
      break;
    default:
      img_src = "/assets/mood/happy.png";
      break;
  }
  return (
    <><img src={img_src} alt='mood status' /></>
  );
};

export default MoodStatus;
