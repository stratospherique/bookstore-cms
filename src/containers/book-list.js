import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBookAction } from '../actions/index';

let BookList = ({ books, handleRemoveBook }) => (
  <tbody>
    {books.length > 0 ? books.map((book) => (
      <Book key={book.id} item={book} handleRemoval={handleRemoveBook} />
    ))
      : (
        <tr>
          <td>Empty List</td>
        </tr>
      )}
  </tbody>
);

const displayableBooks = (books, theFilter) => {
  if (theFilter === 'All') {
    return books;
  }
  return books.filter(item => item.category === theFilter);
};

// inject store state as props to Booklist component
const mapStateToProps = (state) => ({
  books: displayableBooks(state.books, state.filter),
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveBook: (book) => {
    dispatch(removeBookAction(book));
  },
});


BookList = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookList;
