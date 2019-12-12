import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Book from '../components/book';
import { removeBookAction, getBooksAction } from '../actions/index';

class BookList extends React.Component {

  UNSAFE_componentWillMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  render() {
    const { books, handleRemoveBook } = this.props;

    return (
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
  }
}

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
    axios.delete('api/v1/books/' + book.id).then(response => {
      dispatch(removeBookAction(book));
    });
  },
  getBooks: () => {
    axios.get('api/v1/books').then(response => {
      dispatch(getBooksAction(response.data.map(item => {
        const { id, title, author, category } = item;
        return { id, title, author, category };
      })));
    })
  },
});


BookList = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookList;
