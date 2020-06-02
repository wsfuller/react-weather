import React from 'react';
import {
  loadTheme,
  classNamesFunction,
  PrimaryButton,
  styled,
} from '@fluentui/react';

import { styles } from './App.styles';
import { lightMode, darkMode } from './themes';
import Navigation from './Navigation';

const getClassNames = classNamesFunction();

let currentTheme = lightMode;
loadTheme(currentTheme);

const toggleTheme = () => {
  currentTheme = currentTheme === lightMode ? darkMode : lightMode;
  loadTheme(currentTheme);
};

function App(props) {
  const { theme } = props;
  const classNames = getClassNames(styles, theme);

  return (
    <div className={classNames.root}>
      <Navigation />
      React Weather Application
      <PrimaryButton text="Change Theme" onClick={() => toggleTheme()} />
    </div>
  );
}

export default styled(App, styles);
