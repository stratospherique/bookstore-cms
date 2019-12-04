import React from 'react';
import { Button, StyledText } from './styled-components';

const Book = ({ item, handleRemoval }) => {
  const book = item;
  return (
    <tr>
      <td>
        <StyledText color="#4386bf">{book.category}</StyledText>
        <StyledText important={true} color={'#121212'} size={'big'}>{book.title}</StyledText>
        <StyledText color="#121212" size="small"><em>Id:</em>{book.id}</StyledText>
      </td>
      <td>
        <Button
          className="btn"
          type="button"
          text="Remove"
          size="small"
          bgColor="#fa983a"
          color="#fff"
          handleClick={() => {
            handleRemoval(book);
          }} />
      </td>
    </tr>
  );
};


export default Book;
