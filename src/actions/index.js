const creatBookAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBookAction = (book) => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});

export { creatBookAction, removeBookAction };
