import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Welcome to Enterprise Level ReactJS Application Development
      </h1>
      <Link to="/counter">Counter Ki Vellu</Link>
      <br />
      <Link to="/todolist">Go to Todolist</Link>
      <br />
      <Link to="/products">Products ko jao</Link>
      <br />
      <Link to="/recipes">Recipes</Link>
      <br />
      <Link to="/users">Users</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
