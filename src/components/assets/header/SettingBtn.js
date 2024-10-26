import React from 'react';
import { ReactComponent as SettingDark } from "./setting_dark.svg"
import { ReactComponent as SettingLigth } from "./setting_light.svg"

const SettingBtn = ({ width = 178, height = 108, fillColor = '#211a6b', isDarkMode = true }) => {
  return (
    isDarkMode ? <SettingDark/> : <SettingLigth/>
  );
};

export default SettingBtn;
