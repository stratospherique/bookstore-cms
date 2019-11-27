import React from 'react';

class Book extends React.Component {

  render() {
    const book = this.props.item
    return (
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
      </tr>
    )
  }
}

export default Book;