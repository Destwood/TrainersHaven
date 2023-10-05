import React from "react";
import style from "./Goods.module.scss";
import "./input.css";
import { useSelector } from "react-redux";
function Goods() {
  const sneakersArray = useSelector(
    (state) => state.selectedType.sneakersArray
  );

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
        <label for="priceRange">Цена:</label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="1000"
          step="10"
          value="500"
        />
        <span id="priceValue">500 грн</span>

        <div className={style.filtersList}>
          <div className={style.filterContainer}>
            <h5 className={style.filterTitle}>Brand</h5>
            <div className={style.filter}>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                New Balance
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                Sport
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                Winger
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                IDK
              </div>
            </div>
          </div>
          <div className={style.filterContainer}>
            <h5 className={style.filterTitle}>Size, EU</h5>
            <div className={style.filter}>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                42
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                43
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                44
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                45
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                46
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                47
              </div>
            </div>
          </div>
          <div className={style.filterContainer}>
            <h5 className={style.filterTitle}>Color</h5>
            <div className={style.filter}>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                Black
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                White
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                Brown
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                Red
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                Green
              </div>
              <div className={style.filterItem}>
                <div className={style.input}>
                  <label class="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1em" width="1em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        class="path"
                      ></path>
                    </svg>
                  </label>
                </div>
                Grey
              </div>
            </div>
          </div>
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
