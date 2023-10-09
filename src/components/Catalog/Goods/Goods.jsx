import React, { useState, useEffect } from "react";
import style from "./Goods.module.scss";
import "./input.css";
import { useSelector } from "react-redux";

import Price from "./Price/Price";

function Goods() {
  const sneakersArray = useSelector((state) => state.selectedType.data);
  const prices = sneakersArray.map((sneaker) => parseFloat(sneaker.Price));

  // Ініціалізуємо змінну prices після отримання sneakersArray

  const [minPrice, setMinPrice] = useState(Math.min(...prices));
  const [maxPrice, setMaxPrice] = useState(Math.max(...prices));

  console.log(sneakersArray);
  const [activeFilters, setActiveFilters] = useState({
    Brand: "",
    Size: [],
    Color: [],
  });

  // checking for filters
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
  // end checking for filters

  // filter realization
  const handleFilterClick = (filterType, filterValue) => {
    // Створюємо копію поточних активних фільтрів
    const newActiveFilters = { ...activeFilters };

    if (filterType === "Brand") {
      if (newActiveFilters.Brand === filterValue) {
        // Якщо клікнули на активний бренд, знімаємо його
        newActiveFilters.Brand = "";
      } else {
        // Якщо клікнули на інший бренд, встановлюємо його як активний
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

    // Оновлюємо стан активних фільтрів
    setActiveFilters(newActiveFilters);
  };
  // filter realization end

  // Функція для відображення активних фільтрів

  const handlePriceChange = (minPrice, maxPrice) => {
    // Створюємо копію поточних активних фільтрів
    const newActiveFilters = { ...activeFilters };

    // Оновлюємо значення фільтрів за ціною
    newActiveFilters.MinPrice = [minPrice];
    newActiveFilters.MaxPrice = [maxPrice];

    // Оновлюємо стан активних фільтрів і мінімальну та максимальну ціну
    setActiveFilters(newActiveFilters);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };
  return (
    <div className={style.wrapper}>
      <div className="">
        <div className={style.activeFilters}>
          <h5 className={style.filterTitle}>Active filters:</h5>
          {Object.entries(activeFilters).map(
            ([filterType, filterValues], index) => (
              <div key={index}>
                {`${filterType}: ${
                  filterType === "Brand"
                    ? filterValues
                    : filterValues.join(", ")
                }`}
              </div>
            )
          )}
        </div>
        <div className={style.filtersList}>
          <Price
            max={Math.max(...prices)}
            min={Math.min(...prices)}
            onPriceChange={handlePriceChange} // Передача функції-колбеку
          />

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

      <div className={style.goods}>
        {sneakersArray
          .filter((sneaker) => {
            if (activeFilters.Brand && sneaker.Brand !== activeFilters.Brand) {
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
              <article className="product">
                <div className="product__image">
                  <img
                    className={style.itemImg}
                    src={sneaker.img[0]}
                    alt={sneaker.Name}
                  />
                </div>
                <h3 className="product__title">{sneaker.Name}</h3>
                <span className="product__price">$ {sneaker.Price}</span>
              </article>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Goods;
