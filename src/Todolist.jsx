import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addTodoAction, deleteTodoAction } from "./store/actions";

function Todolist(props) {
  const [ntd, setNtd] = useState("");
  useEffect(() => {
    console.log("Todolist Component Rendered");
  });
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
          props.addTodoFn(ntd);
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todos.map((todo, i) => {
          return (
            <li key={todo}>
              {todo}
              <button
                onClick={() => {
                  props.deleteTodoFn(i);
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
function mapStateToProps(state) {
  return state.todoReducer;
}
function mapDispatchToProps(dispatch) {
  return {
    addTodoFn: (ntd) => {
      dispatch(addTodoAction(ntd));
    },
    deleteTodoFn: (i) => {
      dispatch(deleteTodoAction(i));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
