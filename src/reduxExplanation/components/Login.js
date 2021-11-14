import React from "react";
import { useDispatch } from "react-redux"; // useDispatch's used to modify state
import { login, logOut } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      Login
      <button
        onClick={() => {
          // now we click button, our action dispatching, we have our required state updated
          dispatch(login({ name: "Vasyl", age: 20, email: "pedro@gmail.com" })); // this value will be available in action payload
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        {" "}
        log out pls{" "}
      </button>
    </div>
  );
}

export default Login;
