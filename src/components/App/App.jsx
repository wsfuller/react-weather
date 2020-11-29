import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Stack } from '@fluentui/react';

import { darkTheme, lightTheme } from '../../themes';

import AppBar from '../AppBar';
import Routes from '../../pages/Routes';
import Modal from '../Modal';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const { darkMode } = useSelector(
    (state) => ({
      darkMode: state.userPreferences.darkMode,
    }),
    shallowEqual
  );

  const toggleAppTheme = useCallback(() => {
    setCurrentTheme(darkMode ? darkTheme : lightTheme);
  }, [darkMode]);

  useEffect(() => {
    toggleAppTheme();
  }, [darkMode, toggleAppTheme]);

  return (
    <ThemeProvider
      applyTo="body"
      theme={currentTheme}
      className="page-container">
      <Stack as="main" styles={{ root: { height: '100%' } }}>
        <AppBar />
        <Routes />
        <Modal />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
