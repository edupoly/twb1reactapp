import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todolistReducer";
import productsReducer from "./productsReducer";
const store = createStore(
  combineReducers({ counterReducer, todoReducer, productsReducer }),
);
export default store;
