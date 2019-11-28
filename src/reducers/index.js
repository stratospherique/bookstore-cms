import { combineReducers } from 'redux';
import booksReducer from './books';

const appReducer = combineReducers({
  books: booksReducer,
});

export default appReducer;
