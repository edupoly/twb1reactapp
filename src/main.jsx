import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./features/counter/Counter.jsx";
import Todolist from "./features/todolist/Todolist.jsx";
import Products from "./features/products/Products.jsx";
import Recipes from "./features/recipes/Recipes.jsx";
import RecipeDetails from "./features/recipes/RecipeDetails.jsx";
import Mytodos from "./features/mytodos/Mytodos.jsx";
import Signup from "./component/Signup.jsx";
import Login from "./component/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
        children: [
          {
            path: "/recipes/recipeDetails/:id",
            element: <RecipeDetails></RecipeDetails>,
          },
        ],
      },
      {
        path: "/mytodos",
        element: <Mytodos />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
);
