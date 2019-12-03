const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';


const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        { ...action.book },
      ];
    case REMOVE_BOOK:
      const index = state.findIndex((value) => value.id === action.id);
      return state.slice(0, index).concat(state.slice(index + 1));
    default:
      return state;
  }
};

export default booksReducer;
