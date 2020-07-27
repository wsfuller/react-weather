import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import {
  WiAlien,
  WiStrongWind,
  WiSunrise,
  WiSunset,
} from 'weather-icons-react';

import {
  classNamesFunction,
  styled,
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
  const { weather, error } = useSelector((state) => state.weather);
  const { temperatureScale } = useSelector((state) => state.userPreferences);

  let content;

  if (!isEmpty(weather)) {
    content = (
      <Fragment>
        <Text variant="xxLarge" className={classes.location}>
          {/* <Icon iconName="MapPin" className={classes.locationIcon} /> */}
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
          label={
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ childrenGap: 5 }}>
              <WiAlien size={24} />
              <span>Visibility</span>
            </Stack>
          }
        />
        <DetailCard
          text={convertWind(weather.wind.speed)}
          label={
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ childrenGap: 5 }}>
              <WiStrongWind size={24} />
              <span>Wind</span>
            </Stack>
          }
        />
        <DetailCard
          text={convertTimeForSun(weather.sys.sunrise)}
          label={
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ childrenGap: 5 }}>
              <WiSunrise size={24} />
              <span>Sunrise</span>
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
              <WiSunset size={24} />
              <span>Sunset</span>
            </Stack>
          }
        />
      </Fragment>
    );
  } else if (error) {
    content = <Text>Error Fetching Weather Details</Text>;
  } else {
    content = <Spinner size={SpinnerSize.large} />;
  }

  return <div className={classes.root}>{content}</div>;
}

export default styled(WeatherPanel, WeatherPanelStyles);
