import {FETCH_BEACHES, FETCH_BEACH, FETCH_ACTIVITIES, FETCH_ACTIVITY_ITEM} from '../actions/types';
import _ from 'lodash';

const initialState = {
  isFetching: true,
  data: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BEACHES:
      return {...state, data: {..._.mapKeys(action.payload, 'beach_id')}, isFetching: false};
    case FETCH_BEACH:
      return {...state, data: {[action.payload.beach_id]: action.payload}, isFetching: false};
    // case FETCH_ACTIVITIES:
    //   return {...state, data: action.payload}
      // return {...state, data: {..._.mapKeys(action.payload, 'id')}, isFetching: false}
    case FETCH_ACTIVITY_ITEM:
      return {...state, data: {[action.payload.id]: action.payload}, isFetching: false}
    default:
      return state;
  }
}