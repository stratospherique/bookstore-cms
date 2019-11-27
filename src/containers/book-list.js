import React from 'react';
import Book from '../components/book';
import { connect } from 'react-redux';

class BookList extends React.Component {
  render() {
    const { books } = this.props
    return (
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
            {books.length > 0 ? books.map((book) => {
              return <Book key={book.id} item={book} />
            }) : <tr><td></td><td>Empty List</td><td></td></tr>}
          </tbody>
        </table>
      </div>
    )
  }
}

// inject store state as props to Booklist component
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

BookList = connect(mapStateToProps, null)(BookList)

export default BookList