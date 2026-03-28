import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todolistReducer from "../features/todolist/todolistSlice";
import likedislikeReducer from "../features/likesdislikes/likesdislikesSlice";
import { productsApi } from "../services/productsAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipesApi } from "../services/recipesAPI";
import { todosApi } from "../services/todosAPI";
export const store = configureStore({
  reducer: {
    counterReducer,
    todolistReducer,
    likedislikeReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      recipesApi.middleware,
      todosApi.middleware,
    ),
});
setupListeners(store.dispatch);
