import React, { useReducer } from "react";
function reducer(state, action) {
  if (action.type == "INC") {
    return { count: state.count + 1 };
  }
  if (action.type == "DEC") {
    return { count: state.count - 1 };
  }
}
function Counter() {
  var [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="mybox border-danger">
      <h1>Counter:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default Counter;
