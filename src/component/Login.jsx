import { useFormik } from "formik";
import React from "react";
import { useLoginMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { updateUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  var [loginFn] = useLoginMutation();
  var dispatch = useDispatch();
  var navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      loginFn(values).then((res) => {
        console.log(res);
        dispatch(updateUser(res.data));
        window.localStorage.setItem("token", res.data.token);
        navigate("/");
      });
    },
  });
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={loginForm.handleSubmit}>
        <input type="text" {...loginForm.getFieldProps("username")} />
        <br />
        <input type="password" {...loginForm.getFieldProps("password")} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
