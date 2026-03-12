import React, { useState } from "react";
import { useTodolist } from "./hooks/useTodolist";

function Todolist() {
  const [todos, addTodo, delTodo] = useTodolist();
  const [ntd, setntd] = useState("");
  return (
    <div>
      <h2>Todolist</h2>
      <input
        type="text"
        onChange={(e) => {
          setntd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(ntd);
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
