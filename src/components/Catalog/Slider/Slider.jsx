import React from "react";
import style from "./Slider.module.scss";

import img from "../../../assets/girl-banner.png";

function Slider() {
  return (
    <div className={style.wrapper}>
      <button className={style.control}>
        <p>&lt;</p>
      </button>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>
            The best thing about going back to school?
          </h2>
          <p className={style.desc}>
            This fall denim is king! Denim is officially back in and cool to
            wear in all its many forms
          </p>
          <div className={style.links}>
            <a href="/" className={style.discovery}>
              Discovery
            </a>
            <a href="/" className={style.shopNow}>
              Shop now
            </a>
          </div>
        </div>
        <div className={style.imgConteiner}>
          <img className={style.img} src={img} alt="girl-banner" />
        </div>
      </div>
      <button className={style.control}>
        <p>&gt;</p>
      </button>
      <div className={style.adaptiveControl}>
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </div>
  );
}

export default Slider;
