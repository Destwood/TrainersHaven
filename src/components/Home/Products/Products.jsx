import React, { useState } from "react";
import style from "./Products.module.scss"; // Підключаємо CSS модулі для компонента
import "./style.css";
import { useSelector } from "react-redux";

function Products() {
  const sneakersArray = useSelector(
    (state) => state.selectedType.sneakersArray
  );

  // loader
  const [displayedItems, setDisplayedItems] = useState(3); // Початково відображаємо 3 елементи
  const itemsPerPage = 3; // Кількість елементів, яку ми хочемо відобразити при натисканні "Load More"
  const [loading, setLoading] = useState(false);
  const handleLoadMore = () => {
    if (displayedItems < sneakersArray.length) {
      setLoading(true); // Початок завантаження
      setTimeout(() => {
        setDisplayedItems(displayedItems + itemsPerPage);
        setLoading(false); // Завершення завантаження після затримки
      }, 3000); // Затримка 3 секунди (3000 мілісекунд)
    }
  };
  // lodader item

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* options */}
        <ul className={style.options}>
          <li className="">
            <button
              className={`${style.button} ${style.active}`}
              data-filter="best-sellers"
            >
              Best Sellers
            </button>
          </li>
          <li className="">
            <button className={`${style.button} `} data-filter="new-products">
              New Products
            </button>
          </li>
          <li className="">
            <button className={`${style.button}`} data-filter="sale-products">
              Sale Products
            </button>
          </li>
        </ul>
        {/* options end */}
        {/* item */}
        <ul className={style.list}>
          {sneakersArray.slice(0, displayedItems).map((sneaker, index) => (
            <div className={style.item} key={index}>
              <article className="product">
                <div className="product__image">
                  <img
                    className={style.itemImg}
                    src={sneaker.pic[3]}
                    alt={sneaker.name}
                  />
                </div>
                <h3 className="product__title">
                  <a href="/">{sneaker.name}</a>
                </h3>
                <span className="product__price">
                  $ {sneaker.price.toFixed(2)}
                </span>
              </article>
            </div>
          ))}
        </ul>
        {/* item end */}
        {loading ? (
          <div className={style.loader}>
            <div class="line-wobble"></div>
          </div>
        ) : (
          <></>
        )}
        {/* load more */}
        <button
          className={`${style.load} ${style.button} ${
            displayedItems >= sneakersArray.length ? style.disabled : ""
          }`}
          onClick={handleLoadMore}
          disabled={loading || displayedItems >= sneakersArray.length}
        >
          <span>Load More...</span>
        </button>
      </div>
      {/* load more end */}
    </div>
  );
}

export default Products;
