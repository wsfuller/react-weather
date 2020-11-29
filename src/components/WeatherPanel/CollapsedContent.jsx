import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  WiCloudy,
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer,
  WiThermometerExterior,
} from 'weather-icons-react';

import { Icon } from '@fluentui/react/lib/Icon';

import useCollapsedContentStyles from './CollapsedContent.styles';
import { DetailTile } from '../WeatherDetail';

import {
  weatherDetailsPropTypes,
  UNITS_OF_MEASUREMENT,
} from '../../utils/collateWeatherDetails';

function CollapsedContent({ weatherDetails }) {
  const classes = useCollapsedContentStyles();
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
    <div>
      <DetailTile
        icon={<Icon iconName="MapPin" className={classes.fluentIcon} />}
        value={`${city.substring(0, 3)}, ${state}`}
        tooltip={`${city}, ${state}`}
      />
      <DetailTile
        icon={<WiThermometer />}
        value={
          <div>
            {CURRENT_TEMPERATURE}
            <span>{TEMPERATURE_SCALE_SYMBOL}</span>
          </div>
        }
        tooltip={`Current Temperature: ${CURRENT_TEMPERATURE}${TEMPERATURE_SCALE_SYMBOL}`}
      />
      <DetailTile
        icon={<WiThermometerExterior />}
        value={
          <div>
            {`${LOW_TEMPERATURE}/${HIGH_TEMPERATURE}`}
            <span>{TEMPERATURE_SCALE_SYMBOL}</span>
          </div>
        }
        tooltip={`Low/High: ${LOW_TEMPERATURE}/${HIGH_TEMPERATURE}${TEMPERATURE_SCALE_SYMBOL}`}
      />
      <DetailTile
        icon={<WiHumidity />}
        value={`${humidity}%`}
        tooltip={`Humidity: ${humidity}%`}
      />
      <DetailTile
        icon={<WiCloudy />}
        value={`${clouds.all}%`}
        tooltip={`Clouds: ${clouds.all}%`}
      />
      <DetailTile
        icon={<Icon iconName="RedEye" className={classes.fluentIcon} />}
        value={`${VISIBILITY} ${VISIBILITY_ABBRIVATION}`}
        tooltip={`Current Visibility: ${VISIBILITY} ${VISIBILITY_ABBRIVATION}`}
      />
      <DetailTile
        icon={<WiStrongWind />}
        value={`${WIND} ${WIND_ABBRIVATION}`}
        tooltip={`Wind Speed: ${WIND} ${WIND_ABBRIVATION}`}
      />
      <DetailTile
        icon={<WiSunrise />}
        value={sunrise}
        tooltip={`Sunrise: ${sunrise}`}
      />
      <DetailTile
        icon={<WiSunset />}
        value={sunset}
        tooltip={`Sunset: ${sunset}`}
      />
    </div>
  );
}

CollapsedContent.propTypes = {
  weatherDetails: PropTypes.shape(weatherDetailsPropTypes).isRequired,
};

export default CollapsedContent;
