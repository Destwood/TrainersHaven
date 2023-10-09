import React, { useState, useEffect } from "react";
import style from "./Products.module.scss"; // Підключаємо CSS модулі для компонента
import "./style.css";
import { useSelector } from "react-redux";

function Products() {
  let arr = [];
  const [choosedOption, setChoosedOption] = useState([]);
  const sneakersArray = useSelector((state) => state.selectedType.data);

  // loader
  const [displayedItems, setdisplayedItems] = useState(3);
  const itemsPerPage = 3;
  const [loading, setLoading] = useState(false);
  const handleLoadMore = () => {
    if (displayedItems < sneakersArray.length) {
      setLoading(true);
      setTimeout(() => {
        setdisplayedItems(displayedItems + itemsPerPage);
        setLoading(false);
      }, 3000);
    }
  };
  // lodader item
  useEffect(() => {
    handleFilter("IsBestSeller");
  }, []);
  const handleFilter = (property) => {
    const filteredSneakers = sneakersArray.filter((item) => item[property]);
    setChoosedOption(filteredSneakers);
    setdisplayedItems(3);
  };

  const handleBestSellers = () => {
    handleFilter("IsBestSeller");
  };
  const handleNewProduct = () => {
    handleFilter("IsNewProduct");
  };
  const handleOnSale = () => {
    handleFilter("IsOnSale");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* options */}
        <ul className={style.options}>
          <li className="">
            <button
              className={`${style.button} ${style.active}`}
              data-filter="best-sellers"
              onClick={() => {
                handleBestSellers();
              }}
            >
              Best Sellers
            </button>
          </li>
          <li className="">
            <button
              className={`${style.button} `}
              data-filter="new-products"
              onClick={() => {
                handleNewProduct();
              }}
            >
              New Products
            </button>
          </li>
          <li className="">
            <button
              className={`${style.button}`}
              data-filter="sale-products"
              onClick={() => {
                handleOnSale();
              }}
            >
              Sale Products
            </button>
          </li>
        </ul>
        {/* options end */}
        {/* item */}
        <ul className={style.list}>
          {choosedOption.slice(0, displayedItems).map((item, index) => (
            <div className={style.item} key={index}>
              <div className="product">
                <div className="product__image">
                  <img
                    className={style.itemImg}
                    src={item.img[0]}
                    alt={item.Name}
                  />
                </div>
                <h3 className="product__title">
                  <a href="/">{item.Name}</a>
                </h3>
              </div>
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
            displayedItems >= choosedOption.length ? style.disabled : ""
          }`}
          onClick={() => {
            handleLoadMore();
          }}
          disabled={loading || displayedItems >= choosedOption.length}
        >
          <span>Load More...</span>
        </button>
      </div>
      {/* load more end */}
    </div>
  );
}

export default Products;
