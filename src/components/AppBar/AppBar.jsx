import React from 'react';

import { classNamesFunction, Stack, styled } from '@fluentui/react';

import AppBarStyles from './AppBar.styles';
import UserPreferences from '../UserPreferences';
import AppMoreInfo from '../AppMoreInfo';

const getClassNames = classNamesFunction();

function AppBar({ theme }) {
  const classes = getClassNames(AppBarStyles, theme);

  return (
    <header className={classes.root}>
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
        <div className="app-name">React Weather</div>
        {/* TODO: Build a settings dropdown that contains Theme, Weather, and Time Toggles. These preferences should be saved in local storage */}
        <Stack horizontal>
          <UserPreferences />
          <AppMoreInfo />
        </Stack>
      </Stack>
    </header>
  );
}

export default styled(AppBar, AppBarStyles);
