import {combineReducers} from 'redux';
import categoriesReducer from '../reducers/categoryReducer';
import changeLanguage from '../reducers/langReducer';
import dataReducer from './dataReducer';
import auth from './auth';
import message from './message';

export default combineReducers({
  language: changeLanguage,
  data: dataReducer,
  auth,
  message,
})