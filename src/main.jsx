import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./Counter.jsx";
import Todolist from "./Todolist.jsx";
import Products from "./Products.jsx";
import Recipes from "./Recipes.jsx";
import ProductDetails from "./ProductDetails.jsx";
import RecipeDetails from "./RecipeDetails.jsx";
import Users from "./Users.jsx";
import UserDetails from "./UserDetails.jsx";

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
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/userDetails",
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
        children: [
          {
            path: "/recipes/:id",
            element: <RecipeDetails></RecipeDetails>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
