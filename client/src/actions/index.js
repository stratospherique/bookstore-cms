const creatBookAction = (book) => {
  return {
    type: 'CREATE_BOOK',
    book,
  }
};

const removeBookAction = (book) => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});

const getBooksAction = (books) => {
  return {
    type: 'GET_BOOKS',
    books,
  };
}

const changeFilterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { creatBookAction, removeBookAction, changeFilterAction, getBooksAction };
