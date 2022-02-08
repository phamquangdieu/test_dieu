import { types } from "../types/books";
let nextId = 0;

const addBook = (book) => {
  return {
    type: types.ADD_BOOK,
    payload: {...book, id: nextId++},
  }
}

export { addBook }; 