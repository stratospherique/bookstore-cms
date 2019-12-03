import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const appReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

export default appReducer;
