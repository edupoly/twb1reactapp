import React, { useEffect } from "react";

function Todolist() {
  const [todos, setTodos] = React.useState([
    "goto goa",
    "pay bills",
    "clean car",
  ]);
  useEffect(() => {
    document.getElementById("d1").focus();
  }, []);
  return (
    <div className="mybox border-info">
      <input type="text" id="d1" />
      <button>Add Todo</button>
      <ul>
        {todos.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
