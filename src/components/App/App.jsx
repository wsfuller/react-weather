import React, { useState } from 'react';
import {
  classNamesFunction,
  FontWeights,
  loadTheme,
  styled,
} from '@fluentui/react';

import { styles } from './App.styles';
import { lightMode, darkMode } from './themes';
import AppBar from '../AppBar';

let currentTheme = lightMode;
loadTheme(currentTheme);

function App({ theme }) {
  const getClassNames = classNamesFunction();
  const classes = getClassNames(styles, Object.assign(theme, { FontWeights }));
  const [timeFormat, setTimeFormat] = useState('ampm');

  const toggleTheme = () => {
    currentTheme = currentTheme === lightMode ? darkMode : lightMode;
    loadTheme(currentTheme);
  };

  const toggleTemperatureScale = () => {
    console.log('TOGGLE TEMPERATURE SCALE');
  };

  const toggleTimeFormat = () => {
    console.log('TOGGLE TIME FORMAT');
  };

  return (
    <div className={classes.root}>
      <AppBar
        toggleTheme={toggleTheme}
        toggleTemperatureScale={toggleTemperatureScale}
        toggleTimeFormat={toggleTimeFormat}
      />
    </div>
  );
}

export default styled(App, styles);
