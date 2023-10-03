import React from "react";
import style from "./Home.module.scss";

import Hero from "./Hero/Hero";
import Banners from "./Bannes/Banners";
import Products from "./Products/Products";
import Options from "./Options/Options";

function Home() {
  return (
    <div className={style.home}>
      <Hero />
      <Banners />
      <Products />
      <Options />
    </div>
  );
}

export default Home;
