import axios from 'axios';

function searchWeather(city, state) {
  const countryCode = 840;
  return function (dispatch) {
    dispatch({ type: 'GET_WEATHER' });
    axios
      .get(
        `${process.env.REACT_APP_WEATHER_API_URL}/data/2.5/weather?q=${city},${state},${countryCode}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        console.log('search weather response: ', response);
        dispatch({
          type: 'GET_WEATHER_SUCCESSFUL',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: 'GET_WEATHER_FAILED', payload: error });
      });
  };
}

export default searchWeather;
