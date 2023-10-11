import React, { useState, useEffect } from "react";
import style from "./Goods.module.scss";
import "./input.css";
import { useSelector } from "react-redux";

import fav from "../../../assets/fav.svg";

import Price from "./Price/Price";

function Goods() {
  const sneakersArray = useSelector((state) => state.selectedType.data);
  const prices = sneakersArray.map((sneaker) => parseFloat(sneaker.Price));
  const [switchFilter, setSwitchFilter] = useState(true);
  const [minPrice, setMinPrice] = useState(Math.min(...prices));
  const [maxPrice, setMaxPrice] = useState(Math.max(...prices));

  console.log(sneakersArray);
  const [activeFilters, setActiveFilters] = useState({
    Brand: "",
    Size: [],
    Color: [],
  });

  const uniqueValues = (field) => [
    ...new Set(sneakersArray.map((sneaker) => sneaker[field])),
  ];
  const allSizes = sneakersArray.reduce((accumulator, sneaker) => {
    return accumulator.concat(sneaker.Size);
  }, []);
  const uniqueSizes = [...new Set(allSizes)];
  const filterData = {
    Brand: uniqueValues("Brand"),
    Size: [...uniqueSizes],
    Color: uniqueValues("Color"),
  };

  // filter realization
  const handleFilterClick = (filterType, filterValue) => {
    const newActiveFilters = { ...activeFilters };

    if (filterType === "Brand") {
      if (newActiveFilters.Brand === filterValue) {
        newActiveFilters.Brand = "";
      } else {
        newActiveFilters.Brand = filterValue;
      }
    } else {
      if (newActiveFilters[filterType]) {
        if (!newActiveFilters[filterType].includes(filterValue)) {
          newActiveFilters[filterType].push(filterValue);
        } else {
          newActiveFilters[filterType] = newActiveFilters[filterType].filter(
            (value) => value !== filterValue
          );
        }
      } else {
        newActiveFilters[filterType] = [filterValue];
      }
    }

    setActiveFilters(newActiveFilters);
  };
  // filter realization end

  const handlePriceChange = (minPrice, maxPrice) => {
    const newActiveFilters = { ...activeFilters };

    newActiveFilters.MinPrice = [minPrice];
    newActiveFilters.MaxPrice = [maxPrice];

    setActiveFilters(newActiveFilters);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.switcher}>
        <div class="customCheckBoxHolder">
          <input
            type="checkbox"
            id="cCB1"
            class="customCheckBoxInput"
            onClick={() => {
              const a = !switchFilter;
              console.log(a);
              setSwitchFilter(a);
            }}
          />
          <label for="cCB1" class="customCheckBoxWrapper">
            <div class="customCheckBox">
              <div class="inner">
                {switchFilter
                  ? "I don't wanna see it anymore"
                  : "Show me filters!"}
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className={style.container}>
        <div className={`${switchFilter ? style.filters : style.none}`}>
          <div className={style.activeFilters}>
            <h5 className={style.filterTitle}>Active filters:</h5>

            {Object.entries(activeFilters).map(
              ([filterType, filterValues], index) => {
                if (
                  filterValues.length > 0 &&
                  filterType !== "MinPrice" &&
                  filterType !== "MaxPrice"
                ) {
                  if (filterType === "Brand" && filterValues !== "") {
                    return (
                      <div key={index}>{`${filterType}: ${filterValues}`}</div>
                    );
                  }
                  return (
                    <div key={index}>{`${filterType}: ${filterValues.join(
                      ", "
                    )}`}</div>
                  );
                }
                return null; // Не відображати, якщо фільтр не вибрано або це ціни
              }
            )}
          </div>
          <div className={style.filtersList}>
            <Price
              max={Math.max(...prices)}
              min={Math.min(...prices)}
              onPriceChange={handlePriceChange} // Передача функції-колбеку
            />
            <div className={style.filterName}>
              {Object.keys(filterData).map((filterType, index) => (
                <div key={index} className={style[filterType]}>
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
                                const value =
                                  e.target.getAttribute("data-value");
                                // const isChecked = e.target.checked;
                                handleFilterClick(filterType, value);
                              }}
                              checked={
                                filterType === "Brand"
                                  ? activeFilters.Brand === filterValue
                                  : null
                              }
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
        </div>

        <div className={style.goods}>
          {sneakersArray
            .filter((sneaker) => {
              if (
                activeFilters.Brand &&
                sneaker.Brand !== activeFilters.Brand
              ) {
                return false;
              }
              if (
                activeFilters.Color.length > 0 &&
                !activeFilters.Color.includes(sneaker.Color)
              ) {
                return false;
              }
              if (
                activeFilters.Size.length > 0 &&
                !activeFilters.Size.some((selectedSize) =>
                  sneaker.Size.includes(parseInt(selectedSize, 10))
                )
              ) {
                return false;
              }
              if (
                activeFilters.MinPrice &&
                parseFloat(sneaker.Price) < activeFilters.MinPrice[0]
              ) {
                return false;
              }

              if (
                activeFilters.MaxPrice &&
                parseFloat(sneaker.Price) > activeFilters.MaxPrice[0]
              ) {
                return false;
              }
              return true;
            })
            .slice(0, 1000)
            .map((sneaker, index) => (
              <div
                className={style.item}
                key={index}
                onClick={() => {
                  console.log(`${index}`);
                }}
              >
                <article className={style.product}>
                  <div className={style.itemImgContainer}>
                    <img
                      className={style.itemImg}
                      src={sneaker.img[0]}
                      alt={sneaker.Name}
                    />
                  </div>
                  <div className={style.underItem}>
                    <div className={style.itemInfo}>
                      <h3 className={style.itemTitle}>{sneaker.Name}</h3>
                      <span className={style.itemPrice}>$ {sneaker.Price}</span>
                    </div>
                    <div className={style.actions}>
                      <button>
                        <img src={fav} alt="fav" className={`${style.icon}`} />
                      </button>
                      <button className={style.addToCart}>+</button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Goods;
