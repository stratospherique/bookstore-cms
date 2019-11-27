export const creatBookAction = (book) => {
  return {
    type: 'CREATE_BOOK',
    book: book
  }
}

export const removeBookAction = (book) => {
  return {
    type: 'REMOVE_BOOK',
    book: book.id
  }
}