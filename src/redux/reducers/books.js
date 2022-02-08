import { types } from "../types/books";

const books = (state=[], action) => {
  switch(action.type) {
    case types.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default books;