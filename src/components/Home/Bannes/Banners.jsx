import React from "react";
import style from "./Banners.module.scss";

import banner1 from "../../../assets/banner-1.jpg";
import banner2 from "../../../assets/banner-2.jpg";
import banner3 from "../../../assets/banner-3.jpg";

const containerStyle = {};

function Banners() {
  return (
    <div className={style.container}>
      <div
        className={style.item}
        style={{
          backgroundImage: `url(${banner1})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>Find your fit</h2>
        <div className={style.now}>
          <p>Buy now</p>
        </div>
      </div>
      <div
        className={style.item}
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>Summer Romance</h2>
        <div className={style.now}>
          <p>Buy now</p>
        </div>
      </div>
      <div
        className={style.item}
        style={{
          backgroundImage: `url(${banner3})`,
        }}
      >
        <h2>20% Off All</h2>
        <div className={style.now}>
          <p>Buy now</p>
        </div>
      </div>
    </div>
  );
}

export default Banners;
