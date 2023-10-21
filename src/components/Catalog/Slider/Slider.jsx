import React, { useState } from "react";
import style from "./Slider.module.scss";

import nike from "../../../assets/nike.png";
import lacoste from "../../../assets/lacoste.png";
import Asics from "../../../assets/Asics.jpg";
import newBalance from "../../../assets/newBalance.png";

function Slider() {
  const [position, setPosition] = useState(0);
  const img = [lacoste, Asics, nike, newBalance];
  const title = ["Lacoste", "Asics", "Nike", "New Balance"];
  const brandDescriptions = [
    "Lacoste is known for its classic style and the iconic crocodile logo. They produce footwear that combines comfort and style.",
    "Asics specializes in athletic footwear and is known for its cushioning technology, particularly for running and other sports.",
    "Nike is a leader in the world of athletic footwear and apparel. They are known for their technological advancements and a wide range of models for various sports and active lifestyles.",
    "New Balance is renowned for its innovative sole technology, providing high levels of comfort and support in their footwear.",
  ];
  const brands = img.map((img, index) => ({
    img,
    title: title[index],
    desc: brandDescriptions[index],
  }));
  const maxMove = 90 * (brands.length - 1);
  const moveLeft = () => {
    if (position <= 0) {
      setPosition(maxMove);
    } else {
      setPosition(position - 90);
    }
  };
  const moveRight = () => {
    if (position >= maxMove) {
      setPosition(0);
    } else {
      setPosition(position + 90);
    }
  };
  // setInterval(() => {
  //   moveRight();
  // }, 5000);
  return (
    <div className={style.wrapper}>
      {/* button */}
      <button
        className={`${style.control} ${style.left}`}
        onClick={() => {
          moveLeft();
        }}
      >
        <p>&lt;</p>
      </button>
      {/* content */}
      <div className="">
        <div className={style.slider}>
          <div className={style.visible} style={{ right: `${position}vw` }}>
            {brands.map((item, index) => (
              <div className={style.container}>
                <div className={style.content}>
                  <h2 className={style.title}>{item.title}</h2>
                  <p className={style.desc}>{item.desc}</p>
                </div>
                <div className={style.imgConteiner}>
                  <img className={style.img} src={item.img} alt="banner" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.points}>
          <button
            className={`${position === 0 ? style.active : ""}`}
            onClick={() => {
              setPosition(0);
            }}
          >
            •
          </button>
          <button
            className={`${position === 90 ? style.active : ""}`}
            onClick={() => {
              setPosition(90);
            }}
          >
            •
          </button>
          <button
            className={`${position === 180 ? style.active : ""}`}
            onClick={() => {
              setPosition(180);
            }}
          >
            •
          </button>
          <button
            className={`${position === 270 ? style.active : ""}`}
            onClick={() => {
              setPosition(270);
            }}
          >
            •
          </button>
        </div>
      </div>
      {/* button */}
      <button
        className={`${style.control} ${style.right}`}
        onClick={() => {
          moveRight();
        }}
      >
        <p>&gt;</p>
      </button>
      {/* adaptive control */}
      <div className={style.adaptiveControl}>
        <button
          className={style.left}
          onClick={() => {
            moveLeft();
          }}
        >
          &lt;
        </button>
        <button
          className={style.right}
          onClick={() => {
            moveRight();
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
