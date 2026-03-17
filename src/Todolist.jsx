import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Todolist(props) {
  const [ntd, setNtd] = useState("");
  return (
    <div className="mybox">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.dispatch({ type: "ADDTODO", payload: ntd });
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todoReducer.todos.map((todo, i) => {
          return (
            <li key={todo}>
              {todo}
              <button
                onClick={() => {
                  props.dispatch({ type: "DELETETODO", payload: i });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect((store) => store)(Todolist);
