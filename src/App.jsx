import Counter from "./Counter";
import Products from "./Products";
import Todolist from "./Todolist";

function App() {
  return (
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Welcome to Enterprise Level ReactJS Application Development
      </h1>
      <Counter></Counter>
      <Todolist></Todolist>
      <Products></Products>
    </div>
  );
}

export default App;
