import React from "react";
import { useGetAllTodosQuery } from "../../services/todosAPI";

function Tasklist() {
  const { isLoading, data } = useGetAllTodosQuery();
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h3>Tasklist</h3>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}

export default Tasklist;
