import React from "react";
import { useSelector } from "react-redux"; // it takes in a function argument that returns the part of the state we want

function Profile() {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1>Profile</h1>
      <p>its your profile:</p>
      <span>name: {user.name} </span>
      <span>age: {user.age} </span>
      <span>email: {user.email} </span>
    </div>
  );
}

export default Profile;
