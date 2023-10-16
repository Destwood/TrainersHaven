import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import Favourite from "./components/Favourite/Favourite";
import Footer from "./components/Footer/Footer";
import Item from "./components/Item/Item";

function App() {
  const page = useSelector((state) => state.page.currentPage);
  let currentPage = <Home />;

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
    case 4:
      currentPage = <Favourite />;
      break;
    case 5:
      currentPage = <Item />;
      break;
    default:
      <Home />;
  }

  return (
    <div className="App">
      <Header />

      <div className="pageContainer">{currentPage}</div>

      <Footer />
    </div>
  );
}

export default App;
