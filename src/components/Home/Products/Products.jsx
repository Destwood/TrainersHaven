import React from "react";
import style from "./Products.module.scss"; // Підключаємо CSS модулі для компонента

function Products() {
  return (
    <div className={style.container}>
      <h2 className="">Products on Main Page</h2>
      <div className="">
        <ul className="">
          <li className="">
            <button className="" data-filter="best-sellers">
              Best Sellers
            </button>
          </li>
          <li className="">
            <button className="" data-filter="new-products">
              New Products
            </button>
          </li>
          <li className="">
            <button className="" data-filter="sale-products">
              Sale Products
            </button>
          </li>
        </ul>
        <ul className={` `}>
          {/* 
          Ваші товари можна додати тут, використовуючи наступну структуру:
          <li className="products-grid__item">
            <article className="product">
              <div className="product__image">
                <img src="img/prod-1.jpg" alt="prod 1" />
              </div>
              <h3 className="product__title">
                <a href="#">
                  Eye Mesh Boat Shoes
                </a>
              </h3>
              <span className="product__price">$220.00</span>
            </article>
          </li>
          */}
        </ul>
        <div className={`${style["main-products__btn-center"]}`}>
          <button className={` `}>
            <span>Load More</span>
            <svg>
              <use xlinkHref="img/sprite.svg#down-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
