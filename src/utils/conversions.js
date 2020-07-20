export function convertTemperature(temperature, temperatureScale) {
  const fahrenheit = Math.floor(((temperature - 273.15) * 9) / 5 + 32);
  const celcius = Math.floor(temperature - 273.15);

  if (temperatureScale === 'celcius') {
    return `${celcius}&deg;C`;
  }
  return `${fahrenheit}&deg;F`;
}

export function convertHumidity(value) {
  const humidity = value / 100;

  return humidity;
}

export function convertClouds(value) {
  const clouds = value / 100;

  return clouds;
}

export function convertWind(value) {
  const wind = Math.ceil(value * 2.237);

  return `${wind} mph`;
}

export function convertVisibility(value) {
  const visibility = Math.floor(value / 1609);

  return `${visibility} mi`;
}

export function convertTimeForSun(time) {
  const date = new Date(parseInt(time * 1000));
  const localeSpecificTime = date.toLocaleTimeString();

  return localeSpecificTime.replace(/:\d+ /, ' ');
}
