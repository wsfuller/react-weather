import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { classNamesFunction, styled } from '@fluentui/react';

import AppBarStyles from './AppBar.styles';
import UserPreferences from '../UserPreferences';

const getClassNames = classNamesFunction();

function AppBar({
  toggleTheme,
  toggleTemperatureScale,
  toggleTimeFormat,
  theme,
}) {
  const [showCallout, setShowCallout] = useState(true);
  const classes = getClassNames(AppBarStyles, theme);

  return (
    <header className={classes.root}>
      <div className="app-name">React Weather</div>
      {/* TODO: Build a settings dropdown that contains Theme, Weather, and Time Toggles. These preferences should be saved in local storage */}
      <div className={classes.rightActions}>
        <UserPreferences
          toggleTheme={toggleTheme}
          toggleTemperatureScale={toggleTemperatureScale}
          toggleTimeFormat={toggleTimeFormat}
        />
        <div>More</div>
      </div>
    </header>
  );
}

AppBar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  toggleTemperatureScale: PropTypes.func.isRequired,
  toggleTimeFormat: PropTypes.func.isRequired,
};

export default styled(AppBar, AppBarStyles);
