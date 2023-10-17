import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./Goods.module.scss";
import "./input.css";
import { useSelector } from "react-redux";
import {
  addToCart,
  addToFav,
  removeFromFav,
  setActiveItem,
  jumpToPage,
} from "../../store/actions";

import fav from "../../../assets/fav.svg";
import favEnd from "../../../assets/favEnd.svg";
import Price from "./Price/Price";

function Goods() {
  const dispatch = useDispatch();
  const sneakersArray = useSelector((state) => state.selectedType.data);
  const favItems = useSelector((state) => state.selectedType.fav);
  const prices = sneakersArray.map((sneaker) => parseFloat(sneaker.price));
  const [switchFilter, setSwitchFilter] = useState(false);
  const [minPrice, setMinPrice] = useState(Math.min(...prices));
  const [maxPrice, setMaxPrice] = useState(Math.max(...prices));
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    brand: "",
    size: [],
    color: [],
  });
  const isSneakerInFavorites = (sneaker, favorites) => {
    return favorites.some((favorite) => favorite.name === sneaker.name);
  };
  const uniqueValues = (field) => [
    ...new Set(sneakersArray.map((sneaker) => sneaker[field])),
  ];
  const allSizes = sneakersArray.reduce((accumulator, sneaker) => {
    return accumulator.concat(sneaker.size);
  }, []);
  const uniqueSizes = [...new Set(allSizes)];
  const filterData = {
    brand: uniqueValues("brand"),
    size: [...uniqueSizes],
    color: uniqueValues("color"),
  };
  // filter realization
  const handleFilterClick = (filterType, filterValue) => {
    const newActiveFilters = { ...activeFilters };

    if (filterType === "brand") {
      if (newActiveFilters.brand === filterValue) {
        newActiveFilters.brand = "";
      } else {
        newActiveFilters.brand = filterValue;
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
  const setActive = (item) => {
    dispatch(setActiveItem(item));
    dispatch(jumpToPage(5));
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
                  if (filterType === "brand" && filterValues !== "") {
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
                return null;
              }
            )}
          </div>
          <div className={style.filtersList}>
            <Price
              max={Math.max(...prices)}
              min={Math.min(...prices)}
              onPriceChange={handlePriceChange}
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
                                filterType === "brand"
                                  ? activeFilters.brand === filterValue
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
                activeFilters.brand &&
                sneaker.brand !== activeFilters.brand
              ) {
                return false;
              }
              if (
                activeFilters.color.length > 0 &&
                !activeFilters.color.includes(sneaker.color)
              ) {
                return false;
              }
              if (
                activeFilters.size.length > 0 &&
                !activeFilters.size.some((selectedSize) =>
                  sneaker.size.includes(parseInt(selectedSize, 10))
                )
              ) {
                return false;
              }
              if (
                activeFilters.MinPrice &&
                parseFloat(sneaker.price) < activeFilters.MinPrice[0]
              ) {
                return false;
              }

              if (
                activeFilters.MaxPrice &&
                parseFloat(sneaker.price) > activeFilters.MaxPrice[0]
              ) {
                return false;
              }
              return true;
            })
            .slice(0, 1000)
            .map((sneaker, index) => (
              <div className={style.item} key={index}>
                <div className={style.product}>
                  <div className={style.itemImgContainer}>
                    <img
                      className={style.itemImg}
                      src={
                        hoveredIndex === index ? sneaker.img[1] : sneaker.img[0]
                      }
                      alt={sneaker.name}
                      onClick={() => setActive(sneaker)}
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                      }}
                    />
                  </div>
                  <div className={style.underItem}>
                    <div className={style.itemInfo}>
                      <h3
                        className={style.itemTitle}
                        onClick={() => setActive(sneaker)}
                      >
                        {sneaker.name}
                      </h3>
                      <span className={style.itemPrice}>$ {sneaker.price}</span>
                    </div>
                    <div className={style.actions}>
                      <button
                        onClick={() => {
                          const isFavorite = isSneakerInFavorites(
                            sneaker,
                            favItems
                          );

                          if (isFavorite) {
                            const favoriteIndex = favItems.findIndex(
                              (favItem) => favItem.name === sneaker.name
                            );

                            if (favoriteIndex !== -1) {
                              dispatch(removeFromFav(favoriteIndex));
                            }
                          } else {
                            dispatch(addToFav(sneaker));
                          }
                        }}
                      >
                        <img
                          src={
                            isSneakerInFavorites(sneaker, favItems)
                              ? favEnd
                              : fav
                          }
                          alt="fav"
                          className={`${style.icon}`}
                        />
                      </button>

                      <button
                        className={style.addToCart}
                        onClick={() => {
                          dispatch(addToCart(sneaker));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Goods;
