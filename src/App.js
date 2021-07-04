import React, { useState } from "react";
import "./App.css";

import FirstExample from "./pages/FirstExample";
import AllEvents from "./pages/AllEvents";
import AllEvents2 from "./pages/AllEvents2";
import ChangeCenter from "./pages/ChangeCenter";

export default function App() {
  return (
    <div>
      <FirstExample />
      <AllEvents />
      <AllEvents2 />
      <ChangeCenter />
    </div>
  );
}
