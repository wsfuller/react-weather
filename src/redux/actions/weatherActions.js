//
// AUTHENTICATION
//__________________________________________________

import axios from 'axios';

const API_URL = '';
const API_KEY = '';

export function fetchWeather(query) {
  return function (dispatch) {
    dispatch({ type: 'FETCHING_WEATHER' });
    axios
      .get(`${API_URL}q=${query}&appid=${API_KEY}`)
      .then((response) => {
        dispatch({
          type: 'FETCHED_WEATHER_SUCCESSFUL',
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: 'FETCHED_WEATHER_REJECTED', payload: err });
      });
  };
}
