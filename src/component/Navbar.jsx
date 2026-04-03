import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="d-flex list-unstyled gap-4">
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
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="btn btn-secondary">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
