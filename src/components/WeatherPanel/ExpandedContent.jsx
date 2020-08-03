import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer,
  WiThermometerExterior,
} from 'weather-icons-react';

import { classNamesFunction, styled, Stack, Text } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';

import ExpandedContentStyles from './ExpandedContent.styles';
import { DetailBar, DetailCard } from '../WeatherDetail';

import {
  weatherDetailsPropTypes,
  UNITS_OF_MEASUREMENT,
} from '../../utils/collateWeatherDetails';

const getClassNames = classNamesFunction();

function ExpandedContent({ theme, weatherDetails }) {
  const classes = getClassNames(ExpandedContentStyles, theme);
  const { systemOfMeasurement } = useSelector((state) => state.userPreferences);
  console.log('WEATHER DETAILS FROM EXPANDED CONTENT: ', weatherDetails);

  const {
    city,
    clouds,
    humidity,
    state,
    sunrise,
    sunset,
    temperature,
    visibility,
    wind,
  } = weatherDetails;

  // TEMPERATURE
  const CURRENT_TEMPERATURE =
    temperature.current[
      UNITS_OF_MEASUREMENT[systemOfMeasurement].temperatureScale
    ];
  const LOW_TEMPERATURE =
    temperature.low[UNITS_OF_MEASUREMENT[systemOfMeasurement].temperatureScale];
  const HIGH_TEMPERATURE =
    temperature.high[
      UNITS_OF_MEASUREMENT[systemOfMeasurement].temperatureScale
    ];
  const TEMPERATURE_SCALE_SYMBOL =
    UNITS_OF_MEASUREMENT[systemOfMeasurement].temperatureSymbol;
  // VISBILITY
  const VISIBILITY = visibility[systemOfMeasurement];
  const VISIBILITY_ABBRIVATION =
    UNITS_OF_MEASUREMENT[systemOfMeasurement].distanceAbbrivation;
  // WIND
  const WIND = wind.speed[systemOfMeasurement];
  const WIND_ABBRIVATION =
    UNITS_OF_MEASUREMENT[systemOfMeasurement].speedAbbrivation;

  return (
    <Stack>
      <Stack.Item align="end">
        <Text variant="xxLarge" className={classes.location}>
          {city}, {state}
        </Text>
      </Stack.Item>
      <Stack.Item align="center">
        <Text variant="mega" className={classes.currentTemperature}>
          {CURRENT_TEMPERATURE}
          {TEMPERATURE_SCALE_SYMBOL}
        </Text>
      </Stack.Item>
      <Stack.Item>
        <DetailBar
          textLeft={`${LOW_TEMPERATURE}${TEMPERATURE_SCALE_SYMBOL}`}
          textRight={`${HIGH_TEMPERATURE}${TEMPERATURE_SCALE_SYMBOL}`}
          description="Low/High"
          fill={1}
        />
      </Stack.Item>
      <Stack.Item>
        <DetailBar
          textLeft={`${humidity}%`}
          description="Humidity"
          fill={humidity / 100}
        />
      </Stack.Item>
      <Stack.Item>
        <DetailBar
          textLeft={`${clouds.all}&#37;`}
          description="Clouds"
          fill={clouds.all / 100}
        />
      </Stack.Item>

      <Stack horizontal>
        <Stack.Item
          className={`${classes.detailCard} ${classes.borderRight} ${classes.borderBottom}`}>
          <Text variant="large" className={classes.value}>
            {VISIBILITY}
            {VISIBILITY_ABBRIVATION}
          </Text>
          <Stack.Item className={classes.label}>
            <Icon iconName="RedEye" />
            <Text>Visibility</Text>
          </Stack.Item>
        </Stack.Item>
        <Stack.Item className={`${classes.detailCard} ${classes.borderBottom}`}>
          <Text variant="large" className={classes.value}>
            {WIND}
            {WIND_ABBRIVATION}
          </Text>
          <Stack.Item className={classes.label}>
            <WiStrongWind size={24} />
            <Text>Wind</Text>
          </Stack.Item>
        </Stack.Item>
      </Stack>
      <Stack horizontal>
        <Stack.Item className={`${classes.detailCard} ${classes.borderRight}`}>
          <Text variant="large" className={classes.value}>
            {sunrise}
          </Text>
          <Stack.Item className={classes.label}>
            <WiSunrise size={24} />
            <Text>Sunrise</Text>
          </Stack.Item>
        </Stack.Item>
        <Stack.Item className={classes.detailCard}>
          <Text variant="large" className={classes.value}>
            {sunset}
          </Text>
          <Stack.Item className={classes.label}>
            <WiSunset size={24} />
            <Text>Sunset</Text>
          </Stack.Item>
        </Stack.Item>
      </Stack>
    </Stack>
  );
}

ExpandedContent.propTypes = {
  weatherDetails: PropTypes.shape(weatherDetailsPropTypes).isRequired,
};

export default styled(ExpandedContent, ExpandedContentStyles);
