import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBookAction } from '../actions/index';

let BookList = ({ books, handleRemoveBook }) => (
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
      <tbody>
        {books.length > 0 ? books.map((book) => <Book key={book.id} item={book} handleRemoval={handleRemoveBook} />)
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
  books: state.books
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveBook: (book) => {
    dispatch(removeBookAction(book));
  }
});


BookList = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookList;
