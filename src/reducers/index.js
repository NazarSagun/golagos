import {combineReducers} from 'redux';
import { i18nReducer } from "react-redux-i18n";
import dataReducer from './dataReducer';
import auth from './auth';
import message from './message';

export default combineReducers({
  // i18n: !localStorage.lang ? i18nReducer : localStorage.lang,
  i18n: i18nReducer,
  data: dataReducer,
  auth,
  message,
})