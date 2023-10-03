import React from "react";
import style from "./Hero.module.scss";

import hero from "../../../assets/hero.jpg";

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <img src={hero} alt="" />
    </div>
  );
}

export default Hero;
