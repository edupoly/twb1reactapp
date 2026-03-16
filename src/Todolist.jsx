import React, { useReducer } from "react";
function todoReducer(state, action) {
  if (action.type == "ADDTODO") {
    return { todos: [...state.todos, action.payload] };
  }
  if (action.type == "DELETETODO") {
    return { todos: state.todos.filter((t, i) => i !== action.payload) };
  }
}
function Todolist() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: ["goto goa", "play cricket"],
  });
  return (
    <div>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          dispatch({
            type: "ADDTODO",
            payload: document.getElementById("d1").value,
          });
        }}
      >
        Add Todo
      </button>
      <ul>
        {state.todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
