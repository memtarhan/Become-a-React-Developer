import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

const people = ["Alex", "Ali", "Anna"];

// - Array destructuring
const [first, second] = ["Alex", "Ali", "Anna"];
console.log(first, second); // prints out: Alex Ali

const [, , onlyThird] = ["Alex", "Ali", "Anna"];
console.log(onlyThird); // prints out: Anna

ReactDOM.render(
  <React.StrictMode>
    <App name="Mehmet" />
  </React.StrictMode>,
  document.getElementById("root")
);