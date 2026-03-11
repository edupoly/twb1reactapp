import React from "react";
function Counter() {
  const [count, setCount] = React.useState(0);
  function handleInc() {
    // setCount(count + 1);
    setCount(function (cv) {
      return cv + 1;
    });
  }
  function handleDec() {
    setCount(function (cv) {
      return cv - 1;
    });
  }
  return (
    <div className="mybox border-danger">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          handleInc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          handleDec();
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default Counter;
