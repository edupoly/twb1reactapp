import React from "react";
import { useCounter } from "./hooks/useCounter";

function Counter() {
  var [count, inc, dec] = useCounter();
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        DEC
      </button>
    </div>
  );
}

export default Counter;
