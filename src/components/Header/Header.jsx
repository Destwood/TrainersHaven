import React, { useState } from "react";
import style from "./Header.module.scss";

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import fav from "../../assets/fav.svg";
import cart from "../../assets/cart.svg";
import { useDispatch } from "react-redux";
import { jumpToPage } from "../store/actions";

function Header() {
  const dispatch = useDispatch();
  const [isInputFocused, setInputFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isBurgerChacked, setisBurgerChacked] = useState(false);

  const handleBurgerChange = (event) => {
    setisBurgerChacked(event.target.checked);
  };

  const handleSearch = () => {
    console.log("Search value:", searchValue);
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div>
          <div className={style.logo}>
            <img src={logo} alt="logo" className={`${style.icon} `} />
            <p>Trainers Haven</p>
          </div>
        </div>

        {/* conteiner for adaprive reverse */}
        {/* nav */}
        <div className={style.nav}>
          <div
            className={style.link}
            onClick={() => {
              dispatch(jumpToPage(1));
            }}
          >
            Home
          </div>
          <div
            className={style.link}
            onClick={() => {
              dispatch(jumpToPage(2));
            }}
          >
            Catalog
          </div>
          {/* <div
            className={style.link}
            onClick={() => {
              dispatch(jumpToPage(3));
            }}
          >
            Cart
          </div> */}
        </div>

        {/* actions */}
        <div className={style.actions}>
          <div
            className={`${style.search} ${
              isInputFocused || searchValue ? style.inputFocused : ""
            }`}
          >
            <img
              src={search}
              alt="search"
              className={`${style.icon} ${style.searchIcon}`}
              onClick={() => {
                handleSearch();
                setSearchValue("");
              }}
            />
            <input
              type="text"
              placeholder="Search"
              className={style.searchInput}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div
              className={`${searchValue ? style.clear : style.hide}`}
              onClick={() => {
                setSearchValue("");
              }}
            >
              X
            </div>
          </div>
          <img src={fav} alt="fav" className={`${style.icon} ${style.fav}`} />
          <img
            src={cart}
            alt="cart"
            className={`${style.icon} ${style.cart}`}
            onClick={() => {
              dispatch(jumpToPage(3));
            }}
          />
          <label className={style.burger} htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              onChange={handleBurgerChange}
              checked={isBurgerChacked}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <div
        className={`${style.dropdown} ${
          isBurgerChacked ? style.flex : style.none
        }`}
      >
        <div
          className={style.link}
          onClick={() => {
            dispatch(jumpToPage(1));
          }}
        >
          Home
        </div>
        <div
          className={style.link}
          onClick={() => {
            dispatch(jumpToPage(2));
          }}
        >
          Catalog
        </div>
        {/* <div
          className={style.link}
          onClick={() => {
            dispatch(jumpToPage(3));
          }}
        >
          Sales
        </div> */}
      </div>
    </div>
  );
}

export default Header;
