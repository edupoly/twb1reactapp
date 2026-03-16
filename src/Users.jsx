import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  var [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers([...data.users]));
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li>
              <Link to={"/userDetails"} state={user}>
                {user.firstName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
