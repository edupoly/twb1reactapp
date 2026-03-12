import React, { useEffect } from "react";

function Todo({ t, i, delTodo }) {
  useEffect(() => {
    console.log(t + " rendered");
  });
  return (
    <li className="border p-2 my-2">
      {t}
      <button
        onClick={() => {
          delTodo(i);
        }}
      >
        Del
      </button>
    </li>
  );
}

export default React.memo(Todo);
