const react = require('../../../../assets/images/tools/react.svg');
const redux = require('../../../../assets/images/tools/redux.svg');
const fluentUILight = require('../../../../assets/images/tools/fluent-ui-light.svg');
const fluentUIDark = require('../../../../assets/images/tools/fluent-ui-dark.svg');
const openWeather = require('../../../../assets/images/tools/open-weather-map-orange.svg');

function buildTools(userPreferences) {
  return [
    {
      image: react,
      title: 'React',
    },
    {
      image: redux,
      title: 'Redux',
    },
    {
      image: userPreferences.darkMode ? fluentUIDark : fluentUILight,
      title: 'Fluent UI (Web)',
    },
    {
      image: openWeather,
      title: 'OpenWeatherMap API',
    },
  ];
}

export default buildTools;
