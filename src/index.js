import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//NOT nee to import HERE? leaflet.css from node_modules
// import "leaflet/dist/leaflet.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
