import {
  isLocalStorageSupported,
  localStorageItemExists,
  createLocalStorageItem,
  updateLocalStorageItem,
} from '../../utils/localStorage';

const userPreferenceStorageName = 'react-weather-user-preferences';

function getStoredUserPreferences() {
  return new Promise((resolve, reject) => {
    const hasAccessToLocalStorage = isLocalStorageSupported();
    let storedUserPreferences;
    if (hasAccessToLocalStorage) {
      const hasUserPreferenceStorage = localStorageItemExists(
        userPreferenceStorageName
      );
      if (hasUserPreferenceStorage) {
        storedUserPreferences = localStorage.getItem(userPreferenceStorageName);
      } else {
        storedUserPreferences = createLocalStorageItem(
          userPreferenceStorageName,
          'null'
        );
        throw Error('Local storage item not found');
      }
      resolve(storedUserPreferences);
    } else {
      const reason = new Error('Local storage is not supported or enabled');
      reject(reason);
    }
  });
}

function getUserPreferences() {
  return function (dispatch) {
    dispatch({ type: 'GET_USER_PREFERENCES' });
    getStoredUserPreferences()
      .then((data) => {
        const results = JSON.parse(data);
        return dispatch({
          type: 'SUCCESS_GETTING_USER_PREFERENCES',
          payload: results,
        });
      })
      .catch((err) => {
        return dispatch({ type: 'FAILED_GETTING_USER_PREFERENCES' });
      });
  };
}

function toggleUserPreference(preference, value) {
  return function (dispatch) {
    switch (preference) {
      case 'temperatureScale': {
        const temperatureScale =
          value === 'fahrenheit' ? 'celcius' : 'fahrenheit';

        updateLocalStorageItem(userPreferenceStorageName, { temperatureScale });

        return dispatch({
          type: 'SET_USER_PREFERENCE',
          payload: { temperatureScale },
        });
      }
      case 'themeMode': {
        const darkMode = !value;

        updateLocalStorageItem(userPreferenceStorageName, { darkMode });

        return dispatch({ type: 'SET_USER_PREFERENCE', payload: { darkMode } });
      }
      case 'timeFormat': {
        const timeFormat = value === 'ampm' ? '24h' : 'ampm';

        updateLocalStorageItem(userPreferenceStorageName, { timeFormat });

        return dispatch({
          type: 'SET_USER_PREFERENCES',
          payload: { timeFormat },
        });
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
