const INITIAL_STATE = {
  temperatureScale: 'fahrenheit',
  timeFormat: 'ampm',
  darkMode: false,
  loading: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_USER_PREFERENCES': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'SUCCESS_GETTING_USER_PREFERENCES': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'FAILED_GETTING_USER_PREFERENCES': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'SET_USER_TEMPERATURE_SCALE': {
      return {
        ...state,
        temperatureScale: 'celcius',
      };
    }
    case 'SET_USER_THEME': {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    default: {
      return { ...state };
    }
  }
}

export default reducer;
