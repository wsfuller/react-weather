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
        ...action.payload,
        loading: false,
      };
    }
    case 'FAILED_GETTING_USER_PREFERENCES':
    case 'FAILED_SETTING_USER_PREFERENCES': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'SET_USER_PREFERENCE': {
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}

export default reducer;
