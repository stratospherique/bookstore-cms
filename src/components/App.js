import React from 'react';
import BookList from '../containers/book-list';
import BookForm from './book-form';

const App = () => {
  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  )
}

export default App;