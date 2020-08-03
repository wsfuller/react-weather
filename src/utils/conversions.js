export function convertKelvinTemperatureTo(temperature, temperatureScale) {
  const fahrenheit = Math.floor(((temperature - 273.15) * 9) / 5 + 32);
  const celcius = Math.floor(temperature - 273.15);

  return temperatureScale === 'celcius' ? celcius : fahrenheit;
}

export function convertWind(value, unitType) {
  const milesPerHour = Math.ceil(value * 2.237);
  const metersPerSecond = Math.ceil(value / 2.237);

  return unitType === 'metric' ? metersPerSecond : milesPerHour;
}

export function convertVisibility(value) {
  const visibility = Math.floor(value / 1609);

  return visibility;
}

export function convertTimeForSun(time, unitType) {
  const date = new Date(parseInt(time * 1000));
  const localeSpecificTime = date.toLocaleTimeString();

  return localeSpecificTime.replace(/:\d+ /, ' ');
}
