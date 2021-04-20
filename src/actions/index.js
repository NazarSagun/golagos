import axios from '../api';
import {FETCH_CATEGORIES, CHANGE_LANGUAGE, FETCH_BEACHES, FETCH_BEACH, FETCH_ACTIVITIES, FETCH_ACTIVITY_ITEM, FETCH_ACTIVITY_ITEMS} from './types';

export const changeLanguage = (lang) => dispatch => {
  dispatch({type: CHANGE_LANGUAGE, payload: lang})
}

export const fetchCategories = () => async dispatch => {
  const response = await axios.get('/cat_dawnload');

  dispatch({type: FETCH_CATEGORIES, payload: response.data})
}

export const fetchBeaches = () => async dispatch => {
  const response = await axios.get('/beaches')

  dispatch({type: FETCH_BEACHES, payload: response.data})
}

export const fetchBeach = (beach_id) => async dispatch => {
  const response = await axios.get(`/beaches/${beach_id}`);

  dispatch({type: FETCH_BEACH, payload: response.data})
}

export const fetchActivities = () => async dispatch => {
  const response = await axios.get('/main_activity');

  dispatch({type: FETCH_ACTIVITIES, payload: response.data})
}

export const fetchActivityItems = () => async dispatch => {
  const response = await axios.get('/activity');

  dispatch({type: FETCH_ACTIVITY_ITEMS, payload: response.data})
}

export const fetchActivityItem = (id) => async dispatch => {
  const response = await axios.get(`/activity/${id}`);

  dispatch({type: FETCH_ACTIVITY_ITEM, payload: response.data})
}