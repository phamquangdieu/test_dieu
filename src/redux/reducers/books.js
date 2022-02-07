import { types } from "../types/books";

const filterTodo = (state=[], action) => {
  switch(action.types) {
    case types.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default filterTodo;