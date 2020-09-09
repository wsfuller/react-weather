const INITIAL_STATE = {
  forecast: {},
  location: '',
  loading: false,
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
        forecast: action.payload.forecast,
        location: action.payload.location,
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
