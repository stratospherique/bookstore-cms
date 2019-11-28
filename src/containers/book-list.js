import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/book';

let BookList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>BookID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 ? books.map((book) => <Book key={book.id} item={book} />)
          : (
            <tr>
              <td>Empty List</td>
            </tr>
          )}
      </tbody>
    </table>
  </div>
);

// inject store state as props to Booklist component
const mapStateToProps = (state) => ({
  books: state.books,
});

BookList = connect(mapStateToProps, null)(BookList);

export default BookList;
