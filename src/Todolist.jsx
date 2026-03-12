import React, { useEffect, useRef } from "react";
import Todo from "./Todo";

function Todolist() {
  const [todos, setTodos] = React.useState([
    "goto goa",
    "pay bills",
    "clean car",
  ]);
  const [ntd, setNtd] = React.useState("");

  function handleAddTodo() {
    setTodos([...todos, ntd]);
  }
  var deleteTodo = React.useCallback(function (ind) {
    var temp = [...todos];
    temp.splice(ind, 1);
    setTodos([...temp]);
  }, []);

  var tref = useRef();

  useEffect(() => {
    console.log(tref);
    tref.current.focus();
  }, []);

  return (
    <div className="mybox border-info">
      <input
        type="text"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
        ref={tref}
      />
      <button
        onClick={() => {
          handleAddTodo();
        }}
      >
        Add Todo
      </button>
      <ul className="list-unstyled p-0">
        {todos.map((t) => {
          return <Todo t={t} delTodo={deleteTodo} key={t}></Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
