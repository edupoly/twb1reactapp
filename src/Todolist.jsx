import React, { useEffect } from "react";
import Todo from "./Todo";
function Todolist() {
  const [todos, setTodos] = React.useState([
    "goto goa",
    "pay bills",
    "clean car",
    "enter the dragon",
    "kill bill pande",
  ]);
  useEffect(() => {
    document.getElementById("d1").focus();
  }, []);
  function deleteTodo(ind) {
    setTodos((ps) => {
      return ps.filter((t, i) => {
        if (i !== ind) {
          return true;
        } else {
          return false;
        }
      });
    });

    // var temp = [...todos];
    // temp.splice(ind, 1);
    // setTodos([...temp]);
  }
  return (
    <div className="mybox border-info">
      <input type="text" id="d1" />
      <button>Add Todo</button>
      <ul>
        {todos.map((t, i) => {
          return <Todo t={t} index={i} delTodo={deleteTodo} key={t}></Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
