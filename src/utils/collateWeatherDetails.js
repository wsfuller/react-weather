import PropTypes from 'prop-types';

import {
  convertKelvinTemperatureTo,
  convertVisibility,
  convertWind,
  convertTimeForSun,
} from './conversions';

export function collateWeatherDetails(weather, state) {
  const weatherDetails = {
    city: weather.name,
    state: state,
    clouds: weather.clouds,
    humidity: weather.main.humidity,
    temperature: {
      current: {
        fahrenheit: convertKelvinTemperatureTo(weather.main.temp, 'imperial'),
        celcius: convertKelvinTemperatureTo(weather.main.temp, 'celcius'),
      },
      high: {
        fahrenheit: convertKelvinTemperatureTo(
          weather.main.temp_max,
          'imperial'
        ),
        celcius: convertKelvinTemperatureTo(weather.main.temp_max, 'celcius'),
      },
      low: {
        fahrenheit: convertKelvinTemperatureTo(
          weather.main.temp_min,
          'imperial'
        ),
        celcius: convertKelvinTemperatureTo(weather.main.temp_min, 'celcius'),
      },
    },
    visibility: {
      imperial: convertVisibility(weather.visibility, 'imperial'),
      metric: weather.visibility,
    },
    wind: {
      speed: {
        imperial: convertWind(weather.wind.speed, 'imperial'),
        metric: Math.ceil(weather.wind.speed),
      },
      degree: weather.wind.deg,
    },
    sunrise: convertTimeForSun(weather.sys.sunrise),
    sunset: convertTimeForSun(weather.sys.sunset),
  };

  return weatherDetails;
}

export const UNITS_OF_MEASUREMENT = {
  imperial: {
    temperatureScale: 'fahrenheit',
    temperatureSymbol: '°F',
    distanceScale: 'miles',
    distanceAbbrivation: 'mi.',
    speedScale: 'milesPerHour',
    speedAbbrivation: 'mph',
  },
  metric: {
    temperatureScale: 'celcius',
    temperatureSymbol: '°C',
    distanceScale: 'meters',
    distanceAbbrivation: 'm',
    speedScale: 'metersPerSecond',
    speedAbbrivation: 'm/s',
  },
};

export const weatherDetailsPropTypes = {
  city: PropTypes.string.isRequired,
  clouds: PropTypes.shape({
    all: PropTypes.number,
  }).isRequired,
  temperature: PropTypes.shape({
    current: PropTypes.shape({
      fahrenheit: PropTypes.number,
      celcius: PropTypes.number,
    }),
    high: PropTypes.shape({
      fahrenheit: PropTypes.number,
      celcius: PropTypes.number,
    }),
    low: PropTypes.shape({
      fahrenheit: PropTypes.number,
      celcius: PropTypes.number,
    }),
  }).isRequired,
  visibility: PropTypes.shape({
    imperial: PropTypes.number,
    metric: PropTypes.number,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.shape({
      imperial: PropTypes.number,
      metric: PropTypes.number,
    }),
    degree: PropTypes.number,
  }).isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
};
