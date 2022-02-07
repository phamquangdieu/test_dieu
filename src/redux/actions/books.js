import { filter } from "lodash";
import store from "..";
import { types } from "../types/books";

const addBook = () => {
  const data = store.getState();
  const doneTodo = filter(data, item => item.status);
  return {
    type: types.DONE_STATUS,
    payload: doneTodo,
  }
}

export { addBook }; 