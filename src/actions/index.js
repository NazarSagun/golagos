import axios from '../api';
import {CHANGE_LANGUAGE, FETCH_BEACHES, FETCH_BEACH, FETCH_ACTIVITIES, FETCH_ACTIVITY, FETCH_ESTATES, FETCH_ESTATE, FETCH_POINT, FETCH_POINTS, FETCH_LANGUAGE, FETCH_LEARN, FETCH_LEARNS, FETCH_ACCOMODATIONS, FETCH_ACCOMODATION, FETCH_SHOP, FETCH_SHOPS, FETCH_INDIVIDUALS, FETCH_INDIVIDUAL} from './types';

//Languages
export const changeLanguage = (e) => dispatch => {
  dispatch({type: CHANGE_LANGUAGE, payload: e.target.id})
}

export const fetchLanguage = () => dispatch => {
  dispatch({type: FETCH_LANGUAGE})
}

//Beaches
export const fetchBeaches = () => async dispatch => {
  const response = await axios.get('/beaches')

  dispatch({type: FETCH_BEACHES, payload: response.data})
}

export const fetchBeach = (beach_id) => async dispatch => {
  const response = await axios.get(`/beaches/${beach_id}`);

  dispatch({type: FETCH_BEACH, payload: response.data})
}

//Accomodation
export const fetchAccomodations = () => async dispatch => {
  const response = await axios.get('/accomodation')

  dispatch({type: FETCH_ACCOMODATIONS, payload: response.data})
}

export const fetchAccomodation = (id) => async dispatch => {
  const response = await axios.get(`/accomodation/${id}`);

  dispatch({type: FETCH_ACCOMODATION, payload: response.data})
}

//Activities
export const fetchActivities = () => async dispatch => {
  const response = await axios.get('/activity');

  dispatch({type: FETCH_ACTIVITIES, payload: response.data})
}

export const fetchActivity = (id) => async dispatch => {
  const response = await axios.get(`/activity/${id}`);

  dispatch({type: FETCH_ACTIVITY, payload: response.data})
}

//Mixed Individuals
export const fetchIndividuals = () => async dispatch => {
  const response = await axios.get('/individual');

  dispatch({type: FETCH_INDIVIDUALS, payload: response.data})
}

export const fetchIndividual = (id) => async dispatch => {
  const response = await axios.get(`/individual/${id}`);

  dispatch({type: FETCH_INDIVIDUAL, payload: response.data})
}

//Shop
export const fetchShops = () => async dispatch => {
  const response = await axios.get('/shop');

  dispatch({type: FETCH_SHOPS, payload: response.data})
}

export const fetchShop = (id) => async dispatch => {
  const response = await axios.get(`/shop/${id}`);

  dispatch({type: FETCH_SHOP, payload: response.data})
}


//Real Estate
export const fetchEstate = (id) => async dispatch => {
  const response = await axios.get(`/estate/${id}`);

  dispatch({type: FETCH_ESTATE, payload: response.data})
}

export const fetchEstates = () => async dispatch => {
  const response = await axios.get(`/estate`);

  dispatch({type: FETCH_ESTATES, payload: response.data})
}

//Points of interest
export const fetchPoint = (id) => async dispatch => {
  const response = await axios.get(`/point/${id}`);

  dispatch({type: FETCH_POINT, payload: response.data})
}

export const fetchPoints = () => async dispatch => {
  const response = await axios.get(`/point`);

  dispatch({type: FETCH_POINTS, payload: response.data})
}

//To Learn
export const fetchLearns = () => async dispatch => {
  const response = await axios.get('/learn');

  dispatch({type: FETCH_LEARNS, payload: response.data})
}

export const fetchLearn = (id) => async dispatch => {
  const response = await axios.get(`/learn/${id}`);

  dispatch({type: FETCH_LEARN, payload: response.data})
}