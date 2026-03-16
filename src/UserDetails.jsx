import React from "react";
import { useLocation } from "react-router-dom";

function UserDetails() {
  var x = useLocation();
  console.log(x);
  return (
    <div>
      <h1>UserDetails::</h1>
      <img src={x.state.image} alt="" />
    </div>
  );
}

export default UserDetails;
