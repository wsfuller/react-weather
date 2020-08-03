const INITIAL_STATE = {
  weather: {},
  state: 'WA',
  loading: true,
  error: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_WEATHER': {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case 'GET_WEATHER_SUCCESSFUL': {
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };
    }
    case 'GET_WEATHER_FAILED': {
      return {
        ...state,
        weather: {},
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}
