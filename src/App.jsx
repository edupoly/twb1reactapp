import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";
import Likesdislikes from "./features/likesdislikes/Likesdislikes";
function App() {
  return (
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Welcome to Enterprise Level ReactJS Application Development
      </h1>
      <Counter></Counter>
      <Todolist></Todolist>
      <Likesdislikes></Likesdislikes>
    </div>
  );
}

export default App;
