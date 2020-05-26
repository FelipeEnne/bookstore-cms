/* eslint-disable no-unused-vars */


const bookStore = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: action.book.id,
          title: action.book.title,
          category: action.book.category,
        },
      ];

    case 'REMOVE_BOOK ':
      return [
        ...state.slice(0, action.book.index),
        ...state.slice(action.book.index + 1, state.length),
      ];

    default:
      return state;
  }
};

export default bookStore;
