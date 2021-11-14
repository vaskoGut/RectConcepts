import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // useDispatch's used to modify state
import { changeColor } from "../features/theme";

// just example of using other reducer
function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.theme.value;
  });

  return (
    <div style={{ backgroundColor: theme }}>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        {" "}
        change color{" "}
      </button>
    </div>
  );
}

export default ChangeColor;
