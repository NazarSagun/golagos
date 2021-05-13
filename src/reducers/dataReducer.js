import {FETCH_BEACHES, FETCH_BEACH, FETCH_ACTIVITIES, FETCH_ACTIVITY, FETCH_ESTATES, FETCH_ESTATE, FETCH_POINT, FETCH_POINTS, FETCH_LEARN, FETCH_LEARNS, FETCH_ACCOMODATIONS, FETCH_ACCOMODATION, FETCH_SHOP, FETCH_SHOPS, FETCH_INDIVIDUALS, FETCH_INDIVIDUAL} from '../actions/types';
import _ from 'lodash';

const initialState = {
  isRFetching: true,
  isAFetching: true,
  isPFetching: true,
  isLFetching: true,
  isACFetching: true,
  isSFetching: true,
  data: {},
  activities: {},
  activity: {},
  estates: {},
  estate: {},
  point: {},
  points: {},
  learn: {},
  learns: {},
  accomodation: {},
  shops: {},
  shop: {},
  individual: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BEACHES:
      return {...state, data: {..._.mapKeys(action.payload, 'beach_id')}, isFetching: false};
    case FETCH_BEACH:
      return {...state, data: {[action.payload.beach_id]: action.payload}, isFetching: false};

    case FETCH_ACTIVITY:
      return {...state, activity: {[action.payload.id]: action.payload}, isAFetching: false}
    case FETCH_ACTIVITIES:
      return {...state, activities: action.payload, isAFetching: false}

    case FETCH_INDIVIDUAL:
      return {...state, individual: {[action.payload.id]: action.payload}, isIFetching: false}
    case FETCH_INDIVIDUALS:
      return {...state, individual: action.payload, isIFetching: false}

    case FETCH_SHOP:
      return {...state, shop: {[action.payload.id]: action.payload}, isSFetching: false}
    case FETCH_SHOPS:
      return {...state, shops: action.payload, isSFetching: false}

    case FETCH_ESTATE:
      return {...state, estate: {[action.payload.id]: action.payload}, isRFetching: false}
    case FETCH_ESTATES:
      return {...state, estates: action.payload, isRFetching: false}

    case FETCH_POINT:
      return {...state, point: {[action.payload.id]: action.payload}, isPFetching: false}
    case FETCH_POINTS:
      return {...state, points: action.payload, isPFetching: false}

    case FETCH_LEARN:
      return {...state, learn: {[action.payload.id]: action.payload}, isLFetching: false}
    case FETCH_LEARNS:
      return {...state, learns: action.payload, isLFetching: false}

    case FETCH_ACCOMODATIONS:
      return {...state, accomodation: {..._.mapKeys(action.payload, 'id')}, isACFetching: false};
    case FETCH_ACCOMODATION:
      return {...state, accomodation: {[action.payload.id]: action.payload}, isACFetching: false};

    default:
      return state;
  }
}