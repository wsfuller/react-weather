import React from 'react';
import { useSelector } from 'react-redux';

import {
  classNamesFunction,
  styled,
  Image,
  Link,
  Stack,
} from '@fluentui/react';

import AppBarStyles from './AppBar.styles';
import UserPreferences from '../UserPreferences';
import AppMoreInfo from '../AppMoreInfo';
import logoDark from '../../assets/images/logos/react-weather-logo-dark.svg';
import logoLight from '../../assets/images/logos/react-weather-logo-light.svg';

const getClassNames = classNamesFunction();

function AppBar({ theme }) {
  const classes = getClassNames(AppBarStyles, theme);
  const { darkMode } = useSelector((state) => state.userPreferences);

  return (
    <header className={classes.root}>
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
        <Link href="/" className={classes.appBranding}>
          <Image
            src={darkMode ? logoLight : logoDark}
            alt="React Weather Logo"
            className={classes.logo}
            height={32}
          />
          ReactWeather
        </Link>
        <Stack horizontal>
          <UserPreferences />
          <AppMoreInfo />
        </Stack>
      </Stack>
    </header>
  );
}

export default styled(AppBar, AppBarStyles);
