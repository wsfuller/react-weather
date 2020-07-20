import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  classNamesFunction,
  styled,
  Icon,
  Spinner,
  SpinnerSize,
  Stack,
  Text,
} from '@fluentui/react';

import WeatherPanelStyles from './WeatherPanel.styles';
import { DetailBar, DetailCard } from '../WeatherDetail';

import {
  convertTemperature,
  convertHumidity,
  convertClouds,
  convertVisibility,
  convertWind,
  convertTimeForSun,
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
          {weather.name}, WA
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
        <DetailCard
          text={convertVisibility(weather.visibility)}
          label="Visibility"
        />
        <DetailCard text={convertWind(weather.wind.speed)} label="Wind" />
        <DetailCard
          text={convertTimeForSun(weather.sys.sunrise)}
          label={
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ childrenGap: 5 }}>
              <Icon iconName="upload" /> <span>Sunrise</span>
            </Stack>
          }
        />
        <DetailCard
          text={convertTimeForSun(weather.sys.sunset)}
          label={
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ childrenGap: 5 }}>
              <Icon iconName="download" />
              <span>Sunset</span>
            </Stack>
          }
        />
      </Fragment>
    );
  }

  return <div className={classes.root}>{content}</div>;
}

export default styled(WeatherPanel, WeatherPanelStyles);
