import React from 'react';
import BookList from '../containers/book-list';
import BookForm from './book-form';
import CategoryFilter from './category-filter';

const App = () => (
  <div>
    <BookList />
    <CategoryFilter />
    <BookForm />
  </div>
);

export default App;
