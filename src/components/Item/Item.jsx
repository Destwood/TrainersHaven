import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, jumpToPage } from "../store/actions";
import style from "./Item.module.scss";
import "./style.css";
function Item() {
  const dispatch = useDispatch();
  const sneaker = useSelector((state) => state.selectedType.activeItem);
  const [mainImg, setMainImg] = useState(sneaker.img[0]);
  const brandDescriptions = {
    Lacoste:
      "Lacoste is known for its classic style and the iconic crocodile logo. They produce footwear that combines comfort and style.",
    "New Balance":
      "New Balance is renowned for its innovative sole technology, providing high levels of comfort and support in their footwear.",
    Adidas:
      "Adidas is a globally recognized brand known for its trademark three stripes. They offer a wide range of athletic and lifestyle footwear.",
    Asics:
      "Asics specializes in athletic footwear and is known for its cushioning technology, particularly for running and other sports.",
    Vans: "Vans is a legendary brand famous for its sneakers and skateboarding footwear. They represent street style and comfort.",
    Puma: "Puma combines sporty style and innovation. They manufacture footwear for various sports and everyday use.",
    Nike: "Nike is a leader in the world of athletic footwear and apparel. They are known for their technological advancements and a wide range of models for various sports and active lifestyles.",
  };
  const [showInfo, setShowInfo] = useState(new Array(3).fill(false));
  const submit = () => {
    dispatch(addToCart(sneaker));
    dispatch(jumpToPage(3));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.views}>
          {sneaker.img.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setMainImg(item);
              }}
              className={`${item === mainImg ? style.active : ""} ${
                style.sideContainer
              }`}
            >
              <img className={style.sideImg} src={item} alt="" />
            </div>
          ))}
        </div>
        <div className="">
          <img className={style.mainImg} src={mainImg} alt="" />
          <div className={style.control}></div>
        </div>
        <div className={style.info}>
          <div className={style.name}>{sneaker.name}</div>
          <div className={style.price}>$ {sneaker.price.toFixed(2)}</div>
          <div className={style.colorContainer}>
            <span className={style.colorTitle}>Color:</span>{" "}
            <span className={style.color}>{sneaker.color}</span>
          </div>

          <select className={style.size} onChange={(e) => {}}>
            <option>Please select</option>
            {sneaker.size.map((item, sizeIndex) => (
              <option key={sizeIndex} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            className={style.submit}
            onClick={() => {
              submit();
            }}
          >
            Add to bag
          </button>
          <div className={style.addInfo}>
            <div className={style.infoItem}>
              <div
                className={style.infoTitle}
                onClick={() => {
                  const updatedShowInfo = [...showInfo];
                  updatedShowInfo[0] = !showInfo[0];
                  setShowInfo(updatedShowInfo);
                }}
              >
                <p>Brand</p>
                <div className="">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={showInfo[0]}
                  />
                  <label htmlFor="brandCheckbox" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                  </label>
                </div>
              </div>
              <div className={`${showInfo[0] ? "" : style.hidden}`}>
                {brandDescriptions[sneaker.brand]}
              </div>
            </div>

            <div className={style.infoItem}>
              <div
                className={style.infoTitle}
                onClick={() => {
                  const updatedShowInfo = [...showInfo];
                  updatedShowInfo[1] = !showInfo[1];
                  setShowInfo(updatedShowInfo);
                }}
              >
                <p>Size & Fit</p>
                <div className="">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={showInfo[1]}
                  />
                  <label for="checkbox" class="toggle">
                    <div class="bars" id="bar1"></div>
                    <div class="bars" id="bar2"></div>
                    <div class="bars" id="bar3"></div>
                  </label>
                </div>
              </div>

              <div className={`${showInfo[1] ? "" : style.hidden}`}>
                Still unsure what size to get?
                <a href="/">Find your recommended size</a>
              </div>
            </div>

            <div className={style.infoItem}>
              <div
                className={style.infoTitle}
                onClick={() => {
                  const updatedShowInfo = [...showInfo];
                  updatedShowInfo[2] = !showInfo[2];
                  setShowInfo(updatedShowInfo);
                }}
              >
                <p>Look After Me</p>
                <div className="">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={showInfo[2]}
                  />
                  <label for="checkbox" class="toggle">
                    <div class="bars" id="bar1"></div>
                    <div class="bars" id="bar2"></div>
                    <div class="bars" id="bar3"></div>
                  </label>
                </div>
              </div>

              <div className={`${showInfo[2] ? "" : style.hidden}`}>
                Wipe clean with a damp cloth or sponge
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
