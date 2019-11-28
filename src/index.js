import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/index';
import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(appReducer)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
