import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://www.econdb.com/api/series/?format=json`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  console.log(data);
  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return <div>No user available</div>;
}

export default App;
