import React from 'react';

const MoodStatus = ({ width = 178, height = 108, fillColor = '#211a6b', mood = "sad" }) => {
  let img_src = ""
  switch (mood) {
    case "sad":
      img_src = "/assets/mood/sad.png";
      break;
    case "playful":
      img_src = "/assets/mood/playful.png";
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
