import React, { useState } from "react";
import style from "./Slider.module.scss";

import nike from "../../../assets/nike.png";
import lacoste from "../../../assets/lacoste.png";
import Asics from "../../../assets/Asics.jpg";
import newBalance from "../../../assets/newBalance.png";

function Slider() {
  const img = [lacoste, Asics, nike, newBalance];
  const title = ["Lacoste", "Asics", "Nike", "New Balance"];
  const brandDescriptions = [
    "Lacoste is known for its classic style and the iconic crocodile logo. They produce footwear that combines comfort and style.",
    "Asics specializes in athletic footwear and is known for its cushioning technology, particularly for running and other sports.",
    "Nike is a leader in the world of athletic footwear and apparel. They are known for their technological advancements and a wide range of models for various sports and active lifestyles.",
    "New Balance is renowned for its innovative sole technology, providing high levels of comfort and support in their footwear.",
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className={style.wrapper}>
      <button
        className={style.control}
        onClick={() => {
          if (index === 0) {
            setIndex(3);
          } else {
            setIndex(index - 1);
          }
        }}
      >
        <p>&lt;</p>
      </button>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>{title[index]}</h2>
          <p className={style.desc}>{brandDescriptions[index]}</p>
        </div>
        <div className={style.imgConteiner}>
          <img className={style.img} src={img[index]} alt="banner" />
        </div>
      </div>
      <button
        className={style.control}
        onClick={() => {
          if (index === 3) {
            setIndex(0);
          } else setIndex(index + 1);
        }}
      >
        <p>&gt;</p>
      </button>
      <div className={style.adaptiveControl}>
        <button
          onClick={() => {
            if (index === 0) {
              setIndex(3);
            } else {
              setIndex(index - 1);
            }
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            if (index === 3) {
              setIndex(0);
            } else setIndex(index + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
