import {combineReducers} from 'redux';
import langReducer from '../reducers/langReducer';
import dataReducer from './dataReducer';
import auth from './auth';
import message from './message';

export default combineReducers({
  language: langReducer,
  data: dataReducer,
  auth,
  message,
})