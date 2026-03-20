import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todolistReducer from "../features/todolist/todolistSlice";
import likedislikeReducer from "../features/likesdislikes/likesdislikesSlice";
export const store = configureStore({
  reducer: {
    counterReducer,
    todolistReducer,
    likedislikeReducer,
  },
});
