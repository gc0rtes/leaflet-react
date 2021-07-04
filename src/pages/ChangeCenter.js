//Ref.: codesandbox.io/s/how-to-change-center-dynamically-in-react-leaflet-v3x-d8rn7?file=/src/App.js:0-1142

import React, { useState, useEffect } from "react";
import "./styles.css";
import MapComp from "./MapComp";

export default function ChangeCenter() {
  const [myMarker, setMyMarker] = useState([36.2048, 138.2529]);

  const [countries, setcountries] = useState([
    {
      India: [20.5937, 78.9629],
    },
    {
      USA: [39.7837304, -100.4458825],
    },
    {
      Canada: [61.0666922, -107.9917071],
    },
    {
      Japan: [36.2048, 138.2529],
    },
  ]);

  const [coords, setCoords] = useState([20.5937, 78.9629]);
  const handleChange = (e) => {
    const target = e.target.value;
    const newCoords = target.split(",");
    const lat = parseFloat(newCoords[0]);
    const lon = parseFloat(newCoords[1]);
    setCoords([lat, lon]);
  };

  useEffect(() => {
    // console.log(coords);
  }, [coords]);

  return (
    <div className="App">
      <select value={coords} onChange={handleChange}>
        <option value="">None</option>
        {countries.map((country, idx) => {
          return (
            <option value={Object.values(country)} key={idx}>
              {Object.keys(country)}
            </option>
          );
        })}
      </select>
      <MapComp coords={coords} myMarker={myMarker} />
    </div>
  );
}
