import React, { useState } from "react";
import "./App.css";

import FirstExample from "./pages/FirstExample";
import AllEvents from "./pages/AllEvents";
import ChangeCenter from "./pages/ChangeCenter";

export default function App() {
  return (
    <div>
      <FirstExample />
      <AllEvents />
      <ChangeCenter />
    </div>
  );
}
