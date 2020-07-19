import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  classNamesFunction,
  styled,
  Icon,
  Spinner,
  SpinnerSize,
  Text,
} from '@fluentui/react';

import WeatherPanelStyles from './WeatherPanel.styles';
import { DetailBar } from '../WeatherDetail';

import {
  convertTemperature,
  convertHumidity,
  convertClouds,
  convertVisibility,
} from '../../utils/conversions';

const getClassNames = classNamesFunction();

function WeatherPanel({ theme }) {
  const classes = getClassNames(WeatherPanelStyles, theme);
  const { weather, loading, error } = useSelector((state) => state.weather);
  const { temperatureScale } = useSelector((state) => state.userPreferences);

  let content;

  if (loading) {
    content = <Spinner size={SpinnerSize.large} />;
  } else {
    content = (
      <Fragment>
        <Text variant="xxLarge" className={classes.location}>
          <Icon iconName="MapPin" className={classes.locationIcon} />
          {weather.name}, CA
        </Text>
        <Text variant="mega" className={classes.currentTemperature}>
          <span
            dangerouslySetInnerHTML={{
              __html: convertTemperature(weather?.main?.temp, temperatureScale),
            }}
          />
        </Text>
        <DetailBar
          textLeft={convertTemperature(
            weather?.main?.temp_min,
            temperatureScale
          )}
          textRight={convertTemperature(
            weather?.main?.temp_max,
            temperatureScale
          )}
          description="Low/High"
          fill={1}
        />
        <DetailBar
          textLeft={`${weather.main.humidity}&#37;`}
          description="Humidity"
          fill={convertHumidity(weather.main.humidity)}
        />
        <DetailBar
          textLeft={`${weather.clouds.all}&#37;`}
          description="Clouds"
          fill={convertClouds(weather.clouds.all)}
        />
      </Fragment>
    );
  }

  return <div className={classes.root}>{content}</div>;
}

export default styled(WeatherPanel, WeatherPanelStyles);
