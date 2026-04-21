import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "./component/userSlice";
function App() {
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      updateUser({
        username: window.localStorage.getItem("username"),
        token: window.localStorage.getItem("token"),
      }),
    );
  }, []);
  return (
    <div className="mybox">
      <h1 className="bg-dark text-info"></h1>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
