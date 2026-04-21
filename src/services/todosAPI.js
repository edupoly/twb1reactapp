// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3600/" }),

  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {
        console.log("hi get all todos");
        return {
          url: "/todos",
          method: "GET",
          headers: {
            token: window.localStorage.getItem("token"),
          },
        };
      },
    }),
    addTodoItem: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        headers: {
          token: window.localStorage.getItem("token"),
        },
        body: { todo },
      }),
    }),
    deleteTodoItem: builder.mutation({
      query: (id) => {
        return {
          url: `/todos/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
  useAddTodoItemMutation,
  useDeleteTodoItemMutation,
} = todosApi;
