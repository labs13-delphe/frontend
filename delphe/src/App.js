import React from "react";

import "./App.css";

import Landing from "./components/LandingPage";
import MVPUsers from "./components/MVPUsers/MVPUser";

function App() {
  return (
    <div className="App">
      <h2>hey, it's me app</h2>
      <MVPUsers />
    </div>
  );
}

export default App;
