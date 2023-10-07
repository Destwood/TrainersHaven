import React, { useState } from "react";
import style from "./Price.module.scss";

function Price() {
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const priceGap = 1000;

  const handlePriceInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "input-min") {
      const newMinPrice = parseInt(value);
      if (newMinPrice + priceGap <= maxPrice) {
        setMinPrice(newMinPrice);
      }
    } else if (name === "input-max") {
      const newMaxPrice = parseInt(value);
      if (newMaxPrice - priceGap >= minPrice) {
        setMaxPrice(newMaxPrice);
      }
    }
  };
  const calculateLeft = ((minPrice / 10000) * 100).toFixed(2);
  const calculateRight = (100 - (maxPrice / 10000) * 100).toFixed(2);
  return (
    <div className={style.wrapper}>
      <div>
        <h2>Price Range</h2>
      </div>
      <div className={style.priceInput}>
        <div className={style.field}>
          <input
            type="number"
            className={style["input-min"]}
            value={minPrice}
            onChange={handlePriceInputChange}
          />
        </div>
        <div className={style.separator}>-</div>
        <div className={style.field}>
          <input
            type="number"
            className={style["input-max"]}
            value={maxPrice}
            onChange={handlePriceInputChange}
          />
        </div>
      </div>
      <div className={style.slider}>
        <div
          className={style.progress}
          style={{ left: `${calculateLeft}%`, right: `${calculateRight}%` }}
        ></div>
      </div>
      <div className={style["range-input"]}>
        <input
          type="range"
          className={style["range-min"]}
          min="0"
          max="10000"
          value={minPrice}
          step="100"
          onChange={(e) => {
            if (minPrice < maxPrice) {
              const newMin = e.target.value;
              if (newMin < maxPrice) {
                setMinPrice(e.target.value);
              }
            }
          }}
        />
        <input
          type="range"
          className={style["range-max"]}
          min="0"
          max="10000"
          value={maxPrice}
          step="100"
          onChange={(e) => {
            if (maxPrice > minPrice) {
              const newMax = e.target.value;
              if (newMax > minPrice) {
                setMaxPrice(e.target.value);
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default Price;
