import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

export const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <Button children="button" onClick={() => addCount()} />
    </>
  );
};
