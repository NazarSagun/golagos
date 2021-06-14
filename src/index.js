import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import redux stuff
import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
//reducers
import reducers from './reducers';

import translations from './110n/translations';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("en"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
