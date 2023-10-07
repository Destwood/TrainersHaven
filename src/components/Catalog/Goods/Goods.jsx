import React, { useState } from "react";
import style from "./Goods.module.scss";
import "./input.css";
import { useSelector } from "react-redux";

import Price from "./Price/Price";

function Goods() {
  const sneakersArray = useSelector((state) => state.selectedType.data);
  console.log(sneakersArray);

  const filterData = {
    Brand: ["New Balance", "Sport", "Winger", "IDK"],
    Size: ["42", "43", "44", "45", "46", "47"],
    Color: ["Black", "White", "Brown", "Red", "Green", "Grey"],
  };

  return (
    <div className={style.wrapper}>
      <div className="">
        <div className={style.activeFilters}>
          <h5 className={style.filterTitle}>Active filters:</h5>

          <ul>
            <li>one</li>
            <li>two</li>
          </ul>
        </div>

        <div className={style.filtersList}>
          <Price />
          {Object.keys(filterData).map((filterType, index) => (
            <div key={index} className={style.filterContainer}>
              <h5 className={style.filterTitle}>{filterType}</h5>
              <div className={style.filter}>
                {filterData[filterType].map((filterValue, subIndex) => (
                  <div className={style.filterItem} key={subIndex}>
                    <div className={style.input}>
                      <label className="container">
                        <input
                          type="checkbox"
                          data-value={filterValue}
                          onClick={(e) => {
                            const value = e.target.getAttribute("data-value");
                            const isChecked = e.target.checked;
                            console.log(
                              `Значення: ${value}, Вибраний: ${isChecked}`
                            );
                          }}
                        />
                        <svg viewBox="0 0 64 64" height="1em" width="1em">
                          <path
                            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                            pathLength="575.0541381835938"
                            className="path"
                          ></path>
                        </svg>
                      </label>
                    </div>
                    {filterValue}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.goods}>
        {sneakersArray.slice(0, 1000).map((sneaker, index) => (
          <div
            className={style.item}
            key={index}
            onClick={() => {
              console.log(`${index}`);
            }}
          >
            <article className="product">
              <div className="product__image">
                <img
                  className={style.itemImg}
                  src={sneaker.pic[3]}
                  alt={sneaker.name}
                />
              </div>
              <h3 className="product__title">{sneaker.name}</h3>
              <span className="product__price">
                $ {sneaker.price.toFixed(2)}
              </span>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goods;
