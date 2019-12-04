import React from 'react';
import BookList from '../containers/book-list';
import { TableContainer, ListTable } from './styled-components';

const BookTable = () => (
  <TableContainer>
    <ListTable>
      <BookList />
    </ListTable>
  </TableContainer>
);

export default BookTable;
