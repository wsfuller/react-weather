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

export function convertVisibility(value) {
  const visibility = Math.floor(value / 1000);

  return visibility;
}

export function convertTimeOfSun(time) {
  const sunset = new Date(time * 1000);
  const sunrise = new Date(time * 1000);
}
