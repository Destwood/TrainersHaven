import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const page = useSelector((state) => state.page.page);
  let currentPage = <Home />;
  console.log(page);

  switch (page) {
    case 1:
      currentPage = <Home />;
      break;
    case 2:
      currentPage = <Catalog />;
      break;
    case 3:
      currentPage = <Cart />;
      break;
    default:
      <Home />;
  }

  return (
    <div className="App">
      <Header />

      {currentPage}

      <Footer />
    </div>
  );
}

export default App;
