import React from 'react';

import { classNamesFunction, styled, Text } from '@fluentui/react';

import WeatherDetailStyles from './WeatherDetail.styles';

const getClassNames = classNamesFunction();

function WeatherDetail({ theme }) {
  const classes = getClassNames(WeatherDetailStyles, theme);

  return (
    <div>
      <Text>Weather Detail</Text>
      <div class="meter">
        <span style={{ width: '25%' }}></span>
      </div>
    </div>
  );
}

export default styled(WeatherDetail, WeatherDetailStyles);
