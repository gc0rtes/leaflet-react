import React, { useState } from "react";
import "./App.css";

import FirstExample from "./pages/FirstExample";
import AllEvents from "./pages/AllEvents";

export default function App() {
  return (
    <div>
      <FirstExample />
      <AllEvents />
    </div>
  );
}
