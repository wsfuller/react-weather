import React from 'react';

import { classNamesFunction, styled, Separator } from '@fluentui/react';

import WeatherPanelStyles from './WeatherPanel.styles';

const getClassNames = classNamesFunction();

function WeatherPanel({ theme }) {
  const classes = getClassNames(WeatherPanelStyles, theme);

  return (
    <div className={classes.root}>
      <h1>San Francisco </h1>
      <Separator alignContent="start">Wind</Separator>
    </div>
  );
}

export default styled(WeatherPanel, WeatherPanelStyles);
