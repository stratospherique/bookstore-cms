import React from 'react';
import BookList from '../containers/book-list';

const BookTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <BookList />
      </table>
    </div>
  )
}

export default BookTable;