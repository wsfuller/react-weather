import React from 'react';

import { classNamesFunction, styled, Separator, Text } from '@fluentui/react';

import WeatherPanelStyles from './WeatherPanel.styles';
import WeatherDetail from '../WeatherDetail';

const getClassNames = classNamesFunction();

function WeatherPanel({ theme }) {
  const classes = getClassNames(WeatherPanelStyles, theme);

  return (
    <div className={classes.root}>
      <Text variant="xxLarge" className={classes.location}>
        San Francisco, CA
      </Text>
      <Text variant="mega" className={classes.currentTemperature}>
        55&deg;F
      </Text>
      <Separator alignContent="start">Wind</Separator>
      <WeatherDetail />
      <div className={classes.lowHighTemperature}>
        55&deg;F =================== 60&deg;F
      </div>
    </div>
  );
}

export default styled(WeatherPanel, WeatherPanelStyles);
