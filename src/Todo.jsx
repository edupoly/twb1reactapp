import React, { useEffect } from "react";

function Todo({ t, index, delTodo }) {
  useEffect(() => {
    console.log(t + " mounted");
    return function () {
      console.log(t + " unmounted");
    };
  }, []);
  useEffect(() => {
    console.log(t + "rendered");
  });
  return (
    <li className="p-2 m-2 border rounded">
      {t}
      <button
        onClick={() => {
          delTodo(index);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default React.memo(Todo);
