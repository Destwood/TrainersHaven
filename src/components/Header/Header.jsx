import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";
import { useSelector } from "react-redux";

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import fav from "../../assets/fav.svg";
import favEnd from "../../assets/favEnd.svg";
import cart from "../../assets/cart.svg";
import { useDispatch } from "react-redux";
import { jumpToPage } from "../store/actions";

function Header() {
  const data = useSelector((state) => state.selectedType.fav);
  const dispatch = useDispatch();
  const [isInputFocused, setInputFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isBurgerChacked, setisBurgerChacked] = useState(false);
  const cartData = useSelector((state) => state.selectedType.cart);
  const favData = useSelector((state) => state.selectedType.fav);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && isBurgerChacked) {
        setisBurgerChacked(true);
      } else {
        setisBurgerChacked(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBurgerChacked]);

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div>
          <div
            className={style.logo}
            onClick={() => {
              dispatch(jumpToPage(1));
            }}
          >
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
            Favourite
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
          <img
            src={data.length > 0 ? favEnd : fav}
            alt="fav"
            className={`${style.icon} ${style.fav}`}
            onClick={() => {
              if (favData.length > 0) {
                dispatch(jumpToPage(4));
              }
            }}
          />
          <div className={style.cartContainer}>
            <img
              src={cart}
              alt="cart"
              className={`${style.icon} ${style.cart}`}
              onClick={() => {
                if (cartData.length > 0) {
                  dispatch(jumpToPage(3));
                }
              }}
            />
            <div
              className={`${cartData.length > 0 ? style.counter : style.none}`}
            >
              <p>{`${cartData.length > 0 ? cartData.length : ""}`}</p>
            </div>
          </div>

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
          Favourite
        </div> */}
      </div>
    </div>
  );
}

export default Header;
