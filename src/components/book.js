import React from 'react';

let Book = ({ item, handleRemoval }) => {
  const book = item;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button onClick={() => {
        handleRemoval(book)
      }}>Remove</button></td>
    </tr>
  );
};




export default Book;
