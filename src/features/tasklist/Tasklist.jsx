import React from "react";
import {
  useAddTodoItemMutation,
  useDeleteTodoItemMutation,
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
} from "../../services/todosAPI";

function Tasklist() {
  const { isLoading, data } = useGetAllTodosQuery();
  var [updateTodosFn] = useLazyGetAllTodosQuery();
  var [deleteTodoFn] = useDeleteTodoItemMutation();
  var [addTodoFn] = useAddTodoItemMutation();
  const [ntd, setNtd] = React.useState("");
  function deleteTodo(id) {
    deleteTodoFn(id).then(() => {
      updateTodosFn();
    });
  }
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h3>Tasklist</h3>
      <input
        type="text"
        onChange={(ev) => {
          setNtd(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodoFn(ntd).then(() => {
            updateTodosFn();
          });
        }}
      >
        Add Todo
      </button>
      {isLoading && <h2>Loading...</h2>}
      {data?.map((todo) => {
        return (
          <li
            className={
              todo.status == "completed" ? "text-decoration-line-through" : ""
            }
          >
            {todo.title}
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
            {todo.status === "completed" && <button>Undo</button>}
            {todo.status === "notcompleted" && <button>Done</button>}
          </li>
        );
      })}
    </div>
  );
}

export default Tasklist;
