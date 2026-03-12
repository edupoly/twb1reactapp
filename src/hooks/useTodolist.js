import { useState } from "react";

export function useTodolist() {
  const [todos, setTodos] = useState(["goto goa", "play cricket"]);
  function addTodo(nt) {
    setTodos((ctodos) => {
      ctodos.push(nt);
      return [...ctodos];
    });
  }
  function delTodo(i) {
    setTodos((ctodos) => {
      ctodos.splice(i, 1);
      return [...ctodos];
    });
  }
  return [todos, addTodo, delTodo];
}
