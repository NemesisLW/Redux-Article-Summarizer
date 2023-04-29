import React from "react";
import Hero from "./components/Hero";
import Sum from "./components/Sum";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Sum />
      </div>
    </main>
  );
};

export default App;
