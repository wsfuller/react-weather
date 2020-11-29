import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { WiStrongWind, WiSunrise, WiSunset } from 'weather-icons-react';

import { Stack, Text } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';

import useExpandedContentStyles from './ExpandedContent.styles';
import { DetailBar, DetailCard } from '../WeatherDetail';

import {
  weatherDetailsPropTypes,
  UNITS_OF_MEASUREMENT,
} from '../../utils/collateWeatherDetails';

function ExpandedContent({ theme, weatherDetails }) {
  const classes = useExpandedContentStyles();
  const { systemOfMeasurement } = useSelector((state) => state.userPreferences);
  const {
    location: { city, state },
    clouds,
    humidity,
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
        <DetailCard
          icon={<Icon iconName="RedEye" />}
          value={`${VISIBILITY}${VISIBILITY_ABBRIVATION}`}
          label="Visibility"
          borderRight
          borderBottom
        />
        <DetailCard
          icon={<WiStrongWind size={24} />}
          value={`${WIND}${WIND_ABBRIVATION}`}
          label="Wind"
          borderBottom
        />
      </Stack>
      <Stack horizontal>
        <DetailCard
          icon={<WiSunrise size={24} />}
          value={sunrise}
          label="Sunrise"
          borderRight
        />
        <DetailCard
          icon={<WiSunset size={24} />}
          value={sunset}
          label="Sunset"
        />
      </Stack>
    </Stack>
  );
}

ExpandedContent.propTypes = {
  weatherDetails: PropTypes.shape(weatherDetailsPropTypes).isRequired,
};

export default ExpandedContent;
