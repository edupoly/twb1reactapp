import { useEffect, useState } from "react";
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log("useEffect on mounting");
  }, []);
  useEffect(() => {
    console.log("useEffect without dependency array");
  });
  useEffect(() => {
    console.log("x updated");
  }, [x]);
  useEffect(() => {
    console.log("y updated");
  }, [y]);
  return (
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Welcome to Enterprise Level ReactJS Application Development
      </h1>
      <h1>X Count:{x}</h1>
      <button
        onClick={() => {
          setX(x + 4);
        }}
      >
        Inc
      </button>
      <h1>Y Count:{y}</h1>
      <button
        onClick={() => {
          setY(y + 5);
        }}
      >
        Inc
      </button>
    </div>
  );
}

export default App;
