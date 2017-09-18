import React from 'react';

const dayTime = require('../assets/images/icons/weather/day.svg');
const nightTime = require('../assets/images/icons/weather/night.svg');

const thunder = require('../assets/images/icons/weather/thunder.svg');
const drizzle = require('../assets/images/icons/weather/drizzle.svg');
const rain = require('../assets/images/icons/weather/rain.svg');
const snow = require('../assets/images/icons/weather/snow.svg');
const cloudy = require('../assets/images/icons/weather/cloudy.svg');

export default function WeatherIcon(props) {
	const { results } = props;
	const sunrise = results.sys.sunrise;
	const sunset = results.sys.sunset;
	const dt = results.dt;
	const weatherConditions = results.weather[0].id;
	let weatherIcon;

	const checkWeatherConditions = (weatherConditions, isDay) => {
		switch (weatherConditions) {
			case 200:
			case 201:
			case 202:
			case 210:
			case 211:
			case 212:
			case 221:
			case 230:
			case 232:
				return (weatherIcon = thunder);
				break;
			case 300:
			case 301:
			case 302:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 321:
			case 701:
				return (weatherIcon = drizzle);
				break;
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 511:
			case 520:
			case 521:
			case 522:
			case 531:
				return (weatherIcon = rain);
				break;
			case 600:
			case 601:
			case 602:
			case 611:
			case 612:
			case 615:
			case 616:
			case 620:
			case 621:
			case 622:
				return (weatherIcon = snow);
				break;
			case 800:
				if (isDay) {
					return (weatherIcon = dayTime);
				} else {
					return (weatherIcon = nightTime);
				}
				break;
			case 801:
			case 802:
			case 803:
			case 804:
				return (weatherIcon = cloudy);
				break;
			default:
				return (weatherIcon =
					'https://openweathermap.org/img/w/' + results.weather[0].icon + '.png');
		}
	};

	let isDay;
	if (dt > sunrise && dt < sunset) {
		isDay = true;
		checkWeatherConditions(weatherConditions, isDay);
	} else {
		isDay = false;
		checkWeatherConditions(weatherConditions, isDay);
	}
	return <img className="weather-icon" src={weatherIcon} />;
}
