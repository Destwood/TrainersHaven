import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";
import { useSelector } from "react-redux";

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import fav from "../../assets/fav.svg";
import favEnd from "../../assets/favEnd.svg";
import cart from "../../assets/cart.svg";
import { useDispatch } from "react-redux";
import { jumpToPage, removeFromCart } from "../store/actions";
import del from "../../assets/delete.svg";

function Header() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [isInputFocused, setInputFocus] = useState(false);
  const [isBurgerChacked, setisBurgerChacked] = useState(false);
  const page = useSelector((state) => state.page.currentPage);
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
            src={favData.length > 0 ? favEnd : fav}
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
              onMouseEnter={() => {
                if (cartData.length > 0 && page !== 3) {
                  setShowPreview(true);
                }
              }}
              onMouseLeave={() => {
                if (cartData.length > 0) {
                  setShowPreview(false);
                }
              }}
              onClick={() => {
                if (cartData.length > 0 && page !== 3) {
                  console.log(page);
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
      <div
        className={`${style.previewContainer} ${
          showPreview ? style.active : ""
        }`}
        onMouseEnter={() => {
          if (page !== 3) {
            setShowPreview(true);
          }
        }}
        onMouseLeave={() => {
          setShowPreview(false);
        }}
      >
        <div className={style.cartPreview}>
          <div className={style.previewHeader}>
            <div className={style.previewHeader_Title}>
              My Bag,
              <span> {cartData.length} items</span>
            </div>
            <button
              className={style.close}
              onClick={() => {
                setShowPreview(false);
              }}
            >
              X
            </button>
          </div>
          <div className={style.previewList}>
            {cartData.map((item, index) => (
              <div className={style.previewItem}>
                <img src={item.img[0]} alt="" className={style.previewImg} />
                <div className="">
                  <div className="">{item.name}</div>
                  <div className="">$ {item.price}</div>
                </div>
                <div
                  className={style.removeContainer}
                  onClick={() => {
                    dispatch(removeFromCart(index));
                  }}
                >
                  <img src={del} alt="remove" className={style.remove} />
                </div>
              </div>
            ))}
          </div>
          <div className={style.previewFooter}>
            <button
              className={style.viewBag}
              onClick={() => {
                dispatch(jumpToPage(3));
                setShowPreview(false);
              }}
            >
              View bag
            </button>
            <button className={style.checkout}>Checkout</button>
          </div>
          <div className={style.previewNote}>Free Delivery Worldwide*</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
