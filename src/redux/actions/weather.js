import axios from 'axios';

function getWeather(city, state) {
  const actionDispatch = async (dispatch) => {
    try {
      dispatch({ type: 'GET_WEATHER' });

      const googleLocationComponents = await axios.get(
        `${process.env.REACT_APP_GOOGLE_MAPS_BASE_URL}/maps/api/geocode/json?address=${city},${state}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`
      );
      const {
        data: { results: googleLocationResults },
      } = await googleLocationComponents;
      const {
        geometry: { location },
        formatted_address,
      } = googleLocationResults[0];
      const forecastLocation = formatted_address.split(',');

      const openWeatherApiCall = await axios.get(
        `${process.env.REACT_APP_OPEN_WEATHER_API_BASE_URL}/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      );
      const { data: openWeatherData } = await openWeatherApiCall;

      dispatch({
        type: 'GET_WEATHER_SUCCESSFUL',
        payload: {
          location: {
            city: forecastLocation[0],
            state: forecastLocation[1].trim().replace(/[0-9]/g, ''),
          },
          forecast: openWeatherData,
        },
      });
    } catch (error) {
      dispatch({ type: 'GET_WEATHER_FAILED', payload: error });
    }
  };

  return actionDispatch;
}

export default getWeather;
