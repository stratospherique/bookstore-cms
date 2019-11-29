const creatBookAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBookAction = (book) => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});

const changeFilterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter
})

export { creatBookAction, removeBookAction, changeFilterAction };
