import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateUser } from "./userSlice";

function Navbar() {
  var { user } = useSelector((state) => state.userReducer);
  var dispatch = useDispatch();
  var navigate = useNavigate();
  console.log(user);
  function logout() {
    window.localStorage.clear();

    dispatch(updateUser({}));
    navigate("/login");
  }
  return (
    <div>
      <ul className="d-flex list-unstyled gap-4">
        {user.token && (
          <>
            <li>Hi!!! {user.username}</li>
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
