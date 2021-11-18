import React, { useEffect, useCallback, useState } from "react";
import List from "./List";

const UseCallbackExplanation = () => {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false);

  console.log("rerender");
  const getNumbers = useCallback(
    (index: number) => {
      console.log("number", number);
      return [number, number + index, number + index + 1];
    },
    [number]
  );

  const stylesContainer = {
    background: theme ? "orange" : "white",
    color: theme ? "orange" : "black",
    padding: "100px"
  };

  return (
    <div style={stylesContainer}>
      <input type="number" value={number} />
      <button onClick={() => setTheme((value) => !value)}>Change theme</button>
      <p>test useCallback</p>
      <List {...{ getNumbers }} />
    </div>
  );
};

export default UseCallbackExplanation;
