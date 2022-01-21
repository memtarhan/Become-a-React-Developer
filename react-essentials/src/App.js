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
    return (
      <div>
        <h1>{data.count}</h1>
        <ul>
          {data.results.map((result) => (
            <li>
              <div>
                <h2>{result.ticker}</h2>
                <h3>{result.description}</h3>
                <h4>{result.geography}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <div>No data available</div>;
}

export default App;
