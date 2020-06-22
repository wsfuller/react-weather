import { combineReducers } from 'redux';

import weather from './weatherReducer';
import userPreferences from './userPreferences';
import modal from './modal';

export default combineReducers({
  weather,
  userPreferences,
  modal,
});
