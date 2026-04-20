import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "./userSlice";

function Navbar() {
  var { user } = useSelector((state) => state.userReducer);
  var dispatch = useDispatch();
  console.log(user);
  function logout() {
    window.localStorage.removeItem("token");
    dispatch(updateUser({}));
  }
  return (
    <div>
      <ul className="d-flex list-unstyled gap-4">
        {user.token && (
          <>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/todolist">Todolist</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/mytodos">Mytodos</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/tasklist">Tasklist</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {!user.token && (
          <>
            <li>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="btn btn-secondary">
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
