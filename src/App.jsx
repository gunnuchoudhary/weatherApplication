import './App.css';
import React, { useState } from 'react';
function App() {
  const [input, setInput] = useState();
  return (
    <div className="weather-App">
      <h1 className="heading">Weather App</h1>
      <h2>Check weather</h2>
      <hr />
      <input
        className="inputCity"
        placeholder="Enter City Name"
        value={input}
        onChange={(e) => {
          console.log("01", e, "02", e.target);
          setInput(e.target.value);
        }}
        // onKeyPress={search}
      />
    </div>
  );
}

export default App;
