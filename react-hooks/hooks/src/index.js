import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [name, setName] = useState("Mehmet");
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    console.log(`Celebrate ${name}`);
    document.title = `Celebrate ${name}`;
  }, [name]);

  useEffect(() => {
    console.log(`The user is ${admin ? "admin" : "not admin"}`);
  }, [admin]);
  return (
    <section>
      <p>Congrats {name}!</p>
      <button onClick={() => setName("Somebody")}>Change Winner</button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(true)}>Log in</button>
    </section>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
