import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Image, Stack } from '@fluentui/react';

import useAppBarStyles from './AppBar.styles';
import UserPreferences from '../UserPreferences';
import AppMoreInfo from '../AppMoreInfo';
import logoDark from '../../assets/images/logos/react-weather-logo-dark.svg';
import logoLight from '../../assets/images/logos/react-weather-logo-light.svg';

function AppBar() {
  const classes = useAppBarStyles();
  const { darkMode } = useSelector((state) => state.userPreferences);

  return (
    <header className={classes.root}>
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
        <Stack.Item>
          <Link to="/" className={classes.appBranding}>
            <Image
              src={darkMode ? logoLight : logoDark}
              alt="ReactWeather Logo"
              className={classes.appLogo}
              height={32}
            />
            ReactWeather
          </Link>
        </Stack.Item>
        <Stack horizontal>
          <UserPreferences />
          <AppMoreInfo />
        </Stack>
      </Stack>
    </header>
  );
}

export default AppBar;
