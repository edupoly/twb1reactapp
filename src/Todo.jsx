import React from "react";

function Todo(props) {
  return (
    <li className="p-2 m-2 border rounded">
      {props.t}
      <button
        onClick={() => {
          props.delTodo(props.index);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Todo;
