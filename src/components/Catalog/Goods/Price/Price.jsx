import React, { useState, useEffect } from "react";
import style from "./Price.module.scss";

function Price(props) {
  const { min, max, onPriceChange } = props;

  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const priceGap = 1;

  useEffect(() => {
    setMinPrice(min);
    setMaxPrice(max);
  }, [min, max]);

  const handlePriceInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "input-min") {
      const newMinPrice = parseInt(value);
      if (newMinPrice + priceGap <= maxPrice) {
        setMinPrice(newMinPrice);
        onPriceChange(newMinPrice, maxPrice);
      }
    } else if (name === "input-max") {
      const newMaxPrice = parseInt(value);
      if (newMaxPrice - priceGap >= minPrice) {
        setMaxPrice(newMaxPrice);
        onPriceChange(minPrice, newMaxPrice);
      }
    }
  };

  const calculateLeft = (((minPrice - min) / (max - min)) * 100).toFixed(2);

  const calculateRight = (((max - maxPrice) / (max - min)) * 100).toFixed(2);

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
            name="input-min"
          />
        </div>
        <div className={style.separator}>-</div>
        <div className={style.field}>
          <input
            type="number"
            name="input-max"
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
          min={min}
          max={max}
          value={minPrice}
          step={priceGap}
          onChange={(e) => {
            if (minPrice < maxPrice) {
              const newMin = parseInt(e.target.value);
              if (newMin < maxPrice) {
                setMinPrice(newMin);
                onPriceChange(newMin, maxPrice);
              }
            }
          }}
        />
        <input
          type="range"
          className={style["range-max"]}
          min={min}
          max={max}
          value={maxPrice}
          step={priceGap}
          onChange={(e) => {
            if (maxPrice > minPrice) {
              const newMax = parseInt(e.target.value);
              if (newMax > minPrice) {
                setMaxPrice(newMax);
                onPriceChange(minPrice, newMax);
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default Price;
