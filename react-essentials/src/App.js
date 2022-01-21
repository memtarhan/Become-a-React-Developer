import './App.css';
import React, { useState } from "react";

function SecretComponent() {
  return <h1>Super secret information for authorized users only</h1>;
}

function RegularComponent() {
  return <h1>Just some public information</h1>;
}

function App() {
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);

  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </>
  );
}

export default App;
