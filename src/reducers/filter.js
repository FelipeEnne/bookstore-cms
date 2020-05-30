const filterReducer = (state = 'CATEGORIES', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.category;
    default:
      return state;
  }
};

export default filterReducer;
