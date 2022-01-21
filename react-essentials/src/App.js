import './App.css';
import React, { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://www.econdb.com/api/series/?format=json`)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, []);

//   if (loading) return <h1>Loading...</h1>;
//   if (error) {
//     return <pre>{JSON.stringify(error, null, 2)}</pre>;
//   }
//   if (!data) {
//     return null;
//   }

//   return (
//     <div>
//       <ul>
//         {data.results.map((result) => (
//           <li>
//             <div>
//               <h2>{result.ticker}</h2>
//               <h3>{result.description}</h3>
//               <h4>{result.geography}</h4>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
  
//   return <div>No data available</div>;
// }

function App() {
return (
  <div> <h1>Going testing!</h1> </div>
)
}

export default App;
