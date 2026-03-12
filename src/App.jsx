import { useEffect, useRef } from "react";
import Address from "./Address";

function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useEffect(() => {
    ref1.current.focus();
  }, []);
  function handleFirstTBox(ev) {
    if (ev.key == "Enter") {
      ref2.current.focus();
    }
  }
  function handleSecondTBox(ev) {
    if (ev.key == "Enter") {
      ref3.current.focus();
    }
  }
  function focusR4() {
    ref4.current.focus();
  }
  return (
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Welcome to Enterprise Level ReactJS Application Development
      </h1>
      <input
        type="text"
        ref={ref1}
        onKeyUp={(e) => {
          handleFirstTBox(e);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        ref={ref2}
        onKeyUp={(e) => {
          handleSecondTBox(e);
        }}
      />
      <Address rf={ref3} prf={ref4} focusR4={focusR4}></Address>
      <br />
      <input type="text" placeholder="enter your school name" ref={ref4} />
    </div>
  );
}

export default App;
