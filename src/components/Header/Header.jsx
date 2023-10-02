import React from "react";
import style from "./Header.module.scss";

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import fav from "../../assets/fav.svg";
import cart from "../../assets/cart.svg";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo" className={`${style.icon} ${style.logo}`} />
        Trainers Haven
      </div>
      <div className="">nav</div>
      <div className={style.actions}>
        <div className={style.search}>
          <div className={style.searchIconContainer}>
            <img
              src={search}
              alt="search"
              className={`${style.icon} ${style.searchIcon}`}
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            className={style.searchInput}
          />
        </div>
        <img src={fav} alt="fav" className={`${style.icon} ${style.fav}`} />
        <img src={cart} alt="cart" className={`${style.icon} ${style.cart}`} />
      </div>
    </div>
  );
}

export default Header;
