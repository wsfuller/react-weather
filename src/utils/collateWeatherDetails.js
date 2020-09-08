import PropTypes from 'prop-types';

import {
  convertKelvinTemperatureTo,
  convertVisibility,
  convertWind,
  convertTimeForSun,
} from './conversions';

export function collateWeatherDetails(forcast, location) {
  const weatherDetails = {
    location: {
      city: location.city,
      state: location.state,
    },
    clouds: forcast.clouds,
    humidity: forcast.main.humidity,
    temperature: {
      current: {
        fahrenheit: convertKelvinTemperatureTo(forcast.main.temp, 'imperial'),
        celcius: convertKelvinTemperatureTo(forcast.main.temp, 'celcius'),
      },
      high: {
        fahrenheit: convertKelvinTemperatureTo(
          forcast.main.temp_max,
          'imperial'
        ),
        celcius: convertKelvinTemperatureTo(forcast.main.temp_max, 'celcius'),
      },
      low: {
        fahrenheit: convertKelvinTemperatureTo(
          forcast.main.temp_min,
          'imperial'
        ),
        celcius: convertKelvinTemperatureTo(forcast.main.temp_min, 'celcius'),
      },
    },
    visibility: {
      imperial: convertVisibility(forcast.visibility, 'imperial'),
      metric: forcast.visibility,
    },
    wind: {
      speed: {
        imperial: convertWind(forcast.wind.speed, 'imperial'),
        metric: Math.ceil(forcast.wind.speed),
      },
      degree: forcast.wind.deg,
    },
    sunrise: convertTimeForSun(forcast.sys.sunrise),
    sunset: convertTimeForSun(forcast.sys.sunset),
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
  location: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
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
