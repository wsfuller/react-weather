import React from 'react';
import { loadTheme, classNamesFunction, styled } from '@fluentui/react';

import { styles } from './App.styles';
import { lightMode, darkMode } from './themes';
import AppBar from './AppBar';

let currentTheme = lightMode;
loadTheme(currentTheme);

function App({ theme }) {
  const getClassNames = classNamesFunction();
  const classes = getClassNames(styles, theme);

  const toggleTheme = () => {
    currentTheme = currentTheme === lightMode ? darkMode : lightMode;
    loadTheme(currentTheme);
  };

  return (
    <div className={classes.root}>
      <AppBar toggleTheme={toggleTheme} />
    </div>
  );
}

export default styled(App, styles);
