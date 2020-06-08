function getLocalStorageUserPreferences(preference) {
  console.log('get local storage user preference: ', preference);
  const userPreferences = localStorage.getItem('reactWeather');
  return new Promise((resolve, reject) => {
    console.log('is this working');
    if (userPreferences) {
      resolve();
    } else {
      var reason = new Error('error with promise');
      reject(reason);
    }
  });
}

function getUserTemperatureScale() {
  console.log('USER PREFERENCES ACTIONS GET USER TEPERATURE SCALE');
  return function (dispatch) {
    dispatch({ type: 'GET_USER_TEMPERATURE_SCALE' });
  };
}

function getUserTimeFormat() {
  console.log('get user time format');
}

function getUserThemeMode() {
  console.log('get user theme mode action');
  return function (dispatch) {
    console.log('after first dispatch action: ', dispatch);
    dispatch({ type: 'GET_USER_THEME_MODE' });
    getLocalStorageUserPreferences('theme')
      .then(() => console.log('dispatch set_user_theme_mode'))
      .catch((err) =>
        console.log('there was an error getting user_theme_mode: ', err)
      );
  };
}

export { getUserTemperatureScale, getUserTimeFormat, getUserThemeMode };
