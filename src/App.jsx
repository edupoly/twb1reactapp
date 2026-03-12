import { useState } from "react";
import A from "./A";
import { MyContext } from "./MyContext";
function App() {
  var [count, setCount] = useState(10);
  return (
    <MyContext.Provider value={{ count, setCount }}>
      <div className="mybox">
        <h1 className="bg-dark text-info">
          Welcome to Enterprise Level ReactJS Application Development :{count}
        </h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <A></A>
      </div>
    </MyContext.Provider>
  );
}

export default App;
