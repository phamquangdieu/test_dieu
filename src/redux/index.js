import { combineReducers, createStore } from "redux";
import todos from "./reducers/todos";
import books from "./reducers/books";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const rootReducer = combineReducers({todos, books});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['books']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };