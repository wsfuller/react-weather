import React, { useCallback, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import {
  classNamesFunction,
  FontWeights,
  loadTheme,
  styled,
} from '@fluentui/react';

import { styles } from './App.styles';
import { breakpoints, lightTheme, darkTheme } from './themes';
import AppBar from '../AppBar';
import Routes from '../../pages/Routes';
import Modal from '../Modal';

let currentTheme = lightTheme;
loadTheme(currentTheme);

function App({ theme }) {
  const getClassNames = classNamesFunction();
  const classes = getClassNames(
    styles,
    Object.assign(theme, { breakpoints, FontWeights })
  );
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
      <Routes />
      <Modal />
    </div>
  );
}

export default styled(App, styles);
