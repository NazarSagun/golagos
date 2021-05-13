import {CHANGE_LANGUAGE, FETCH_LANGUAGE} from '../actions/types';

const initialState = {
  selectedLanguage: 'united-kingdom.png'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_LANGUAGE:
      localStorage.setItem('lang', action.payload)
      return {...state, selectedLanguage: action.payload}
    case FETCH_LANGUAGE:
      if (localStorage.lang === undefined) {
        
        return {...state}
      } else return {...state, selectedLanguage: localStorage.lang}
    default:
      return state;
  }
};