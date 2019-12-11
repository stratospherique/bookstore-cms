import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/index';
import App from './components/App';
import './reset.css';

const initialState = {
  books: [],
  filter: 'All',
};


ReactDOM.render(
  <Provider store={createStore(appReducer, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
