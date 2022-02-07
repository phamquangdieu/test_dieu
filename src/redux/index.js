import { combineReducers, createStore } from "redux";
import todos from "./reducers/todos";
import books from "./reducers/books";

const store = createStore(combineReducers({todos, books}));

export default store;