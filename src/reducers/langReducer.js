import {CHANGE_LANGUAGE} from '../actions/types';

export default (state = {lang: 'en'}, action) => {
  switch(action.type) {
    case CHANGE_LANGUAGE:
      
      localStorage.setItem('lang', action.payload)
      return {...state, lang: action.payload}
    
    default:
      return state;
  }
};