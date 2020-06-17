import { combineReducers } from 'redux';

import weather from './weatherReducer';
import userPreferences from './userPreferences';

export default combineReducers({
  weather,
  userPreferences,
});
