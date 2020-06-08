const INITIAL_STATE = {
  temperatureScale: 'fahrenheit',
  timeFormat: 'ampm',
  darkMode: false,
  loading: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_USER_THEME_MODE': {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return { ...state };
    }
  }
}

export default reducer;
