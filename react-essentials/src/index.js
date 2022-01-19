import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
  // React.createElement(
  //   "ul",
  //   null,
  //   React.createElement(
  //     "li",
  //     {
  //     style: { color: "blue", fontSize: 16, }
  //     },
  //     "An item"
  //   ),
  //   React.createElement(
  //     "li",
  //     {
  //     style: { color: "blue", fontSize: 16, }
  //     },
  //     "An item"
  //   ),
  //   React.createElement(
  //     "li",
  //     {
  //     style: { color: "blue", fontSize: 16, }
  //     },
  //     "An item"
  //   ),
  //   React.createElement(
  //     "li",
  //     {
  //     style: { color: "blue", fontSize: 16, }
  //     },
  //     "An item"
  //   )
  // ),
  document.getElementById('root')
);