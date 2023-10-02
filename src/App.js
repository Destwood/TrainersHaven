import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
