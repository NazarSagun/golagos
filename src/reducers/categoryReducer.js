import {FETCH_CATEGORIES} from '../actions/types';
import _ from 'lodash';

const initialState = {
  isFetching: true,
  categories: {},
  
}


export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return {...state, categories: {..._.mapKeys(action.payload, 'cat_id')}, isFetching: false}
    default:
      return state;
  }
}
