import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [name, setName] = useState("Mehmet");
  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });

  return (
    <section>
      <p>Congrats {name}!</p>
      <button onClick={() => setName("Somebody")}>Change Winner</button>
    </section>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
