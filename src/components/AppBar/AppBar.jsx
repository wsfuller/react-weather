import React from 'react';
import PropTypes from 'prop-types';

import { classNamesFunction, Stack, styled } from '@fluentui/react';

import AppBarStyles from './AppBar.styles';
import UserPreferences from '../UserPreferences';
import AppMoreInfo from '../AppMoreInfo';

const getClassNames = classNamesFunction();

function AppBar({
  toggleTheme,
  toggleTemperatureScale,
  toggleTimeFormat,
  theme,
}) {
  const classes = getClassNames(AppBarStyles, theme);

  return (
    <header className={classes.root}>
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
        <div className="app-name">React Weather</div>
        {/* TODO: Build a settings dropdown that contains Theme, Weather, and Time Toggles. These preferences should be saved in local storage */}
        <Stack horizontal>
          <UserPreferences
            toggleTheme={toggleTheme}
            toggleTemperatureScale={toggleTemperatureScale}
            toggleTimeFormat={toggleTimeFormat}
          />
          <AppMoreInfo />
        </Stack>
      </Stack>
    </header>
  );
}

AppBar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  toggleTemperatureScale: PropTypes.func.isRequired,
  toggleTimeFormat: PropTypes.func.isRequired,
};

export default styled(AppBar, AppBarStyles);
