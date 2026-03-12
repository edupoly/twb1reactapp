import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function C() {
  var { count, setCount } = useContext(MyContext);
  return (
    <div className="mybox">
      <h1>C Component :{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>
    </div>
  );
}

export default C;
