import React, { useCallback, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import {
  classNamesFunction,
  FontWeights,
  loadTheme,
  styled,
} from '@fluentui/react';

import { styles } from './App.styles';
import { lightTheme, darkTheme } from './themes';
import AppBar from '../AppBar';

let currentTheme = lightTheme;
loadTheme(currentTheme);

function App({ theme }) {
  const getClassNames = classNamesFunction();
  const classes = getClassNames(styles, Object.assign(theme, { FontWeights }));
  const { darkMode } = useSelector(
    (state) => ({
      darkMode: state.userPreferences.darkMode,
    }),
    shallowEqual
  );

  const toggleAppTheme = useCallback(() => {
    currentTheme = darkMode ? darkTheme : lightTheme;
    loadTheme(currentTheme);
  }, [darkMode]);

  useEffect(() => {
    toggleAppTheme();
  }, [darkMode, toggleAppTheme]);

  return (
    <div className={classes.root}>
      <AppBar />
    </div>
  );
}

export default styled(App, styles);
