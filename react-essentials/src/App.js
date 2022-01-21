import './App.css';
import React, { useReducer } from "react";

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  const [value, increment] = useReducer((value) => value + 1, 0);
  // const [value, decrement] = useReducer((value) => value - 1, 0);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}></input>
      <p>{checked ? "checked" : "not checked"}</p>
      <br></br>
      <button onClick={increment}>Increment</button>
      {/* <button onClick={decrement}>Decrement</button> */}
      <p>Current value: {value}</p>
    </>
  );
}

export default App;
