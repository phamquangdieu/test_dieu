import { forEach } from "lodash";
import store from "../";
import { types } from "../types/todos";

let nextId = 0;

const addTodo = toDo => ({
  type: types.ADD_TODO,
  payload: {...toDo, id: nextId++},
});

const doneTodo = id => {
  const data = store.getState().todos;
  const newData = forEach(data, item => {
    if (item.id === id) {
      item.status = true;
    }
  })
  return ({
    type: types.DONE_TODO,
    payload: newData,
  })
}

export { addTodo, doneTodo };
