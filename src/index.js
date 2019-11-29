import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/index';
import App from './components/App';

const initialState = {
  books: [
    {
      id: 0,
      title: 'Game Of thrones',
      category: 'History',
    },
    {
      id: 1,
      title: 'The Sign Of the Four',
      category: 'Sci-Fi',
    },
    {
      id: 2,
      title: 'A Study in Scarlet',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'The Final Problem',
      category: 'Action',
    }
  ],
  filter: 'All',
};


ReactDOM.render(
  <Provider store={createStore(appReducer, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

