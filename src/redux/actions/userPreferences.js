import isLocalStorageSupported from '../../utils/isLocalStorageSupported';

function getStoredUserPreferences() {
  return new Promise((resolve, reject) => {
    const hasAccessToLocalStorage = isLocalStorageSupported();
    if (hasAccessToLocalStorage) {
      // const userPreferences = localStorage.getItem('reactWeather');
      resolve();
    } else {
      var reason = new Error('Local Storage is not Supported or Enabled');
      reject(reason);
    }
  });
}

function getUserPreferences() {
  return function (dispatch) {
    dispatch({ type: 'GET_USER_PREFERENCES' });
    getStoredUserPreferences()
      .then(() => dispatch({ type: 'SUCCESS_GETTING_USER_PREFERENCES' }))
      .catch((err) => {
        console.error('There was an error getting User Preferences: ', err);
        return dispatch({ type: 'FAILED_GETTING_USER_PREFERENCES' });
      });
  };
}

function toggleUserPreference(preference) {
  return function (dispatch) {
    switch (preference) {
      case 'temperatureScale': {
        return dispatch({ type: 'SET_USER_TEMPERATURE_SCALE' });
      }
      case 'themeMode': {
        return dispatch({ type: 'SET_USER_THEME' });
      }
      case 'timeFormat': {
        return dispatch({ type: 'SET_USER_TIME_FORMAT' });
      }
      default: {
        console.warn(
          `toggleUserPrefences argument not found. Must be 'temperatureScale', 'timeFormat', or 'themeMode `
        );
        return null;
      }
    }
  };
}

export { getUserPreferences, toggleUserPreference };
