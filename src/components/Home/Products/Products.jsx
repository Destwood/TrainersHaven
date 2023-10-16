import React, { useState, useEffect } from "react";
import style from "./Products.module.scss"; // Підключаємо CSS модулі для компонента
import "./style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActiveItem, jumpToPage } from "../../store/actions";

function Products() {
  let arr = [];
  const dispatch = useDispatch();
  const sneakersArray = useSelector((state) => state.selectedType.data);
  const [choosedOption, setChoosedOption] = useState(sneakersArray);
  let counter = 0;

  // loader
  const [displayedItems, setdisplayedItems] = useState(3);
  const itemsPerPage = 3;
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(""); // Додали стан для активної категорії

  const handleLoadMore = () => {
    if (displayedItems < sneakersArray.length) {
      setLoading(true);
      setTimeout(() => {
        setdisplayedItems(displayedItems + itemsPerPage);
        setLoading(false);
      }, 2000);
    }
  };
  const handleFilter = (property) => {
    const filteredSneakers = sneakersArray.filter((item) => item[property]);
    setChoosedOption(filteredSneakers);
    setdisplayedItems(3);
  };
  const handleCategory = (category) => {
    handleFilter(category);
    setActiveCategory(category);
  };
  const submit = (sneaker) => {
    dispatch(setActiveItem(sneaker));
    dispatch(jumpToPage(5));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* options */}
        <div className={style.options}>
          <button
            className={`${style.button} ${
              activeCategory === "IsBestSeller" ? style.active : ""
            }`}
            data-filter="best-sellers"
            onClick={() => {
              handleCategory("IsBestSeller");
            }}
          >
            Best Sellers
          </button>
          <button
            className={`${style.button} ${
              activeCategory === "IsNewProduct" ? style.active : ""
            }`}
            data-filter="new-products"
            onClick={() => handleCategory("IsNewProduct")}
          >
            New Products
          </button>
          <button
            className={`${style.button} ${
              activeCategory === "IsOnSale" ? style.active : ""
            }`}
            data-filter="sale-products"
            onClick={() => handleCategory("IsOnSale")}
          >
            Sale Products
          </button>
        </div>
        {/* options end */}
        {/* item */}
        <ul className={style.list}>
          {choosedOption.slice(0, displayedItems).map((item, index) => (
            <div
              className={style.item}
              key={index}
              onClick={() => submit(item)}
            >
              <div className="product">
                <div className="product__image">
                  <img
                    className={style.itemImg}
                    src={item.img[0]}
                    alt={item.name}
                  />
                </div>
                <h3 className="product__title">{item.name}</h3>
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
        )}
        {/* load more */}
      </div>
      {/* load more end */}
    </div>
  );
}

export default Products;
