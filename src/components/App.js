import React from 'react';
import BooksTable from '../components/books-table';
import BookForm from './book-form';
import CategoryFilter from './category-filter';
import Navigation from './navigation';
import { Container, InnerRoot } from './styled-components';

const App = () => (
  <InnerRoot >
    <Container>
      <Navigation />
      <BooksTable />
      <CategoryFilter />
      <BookForm />
    </Container>
  </InnerRoot>
);

export default App;
