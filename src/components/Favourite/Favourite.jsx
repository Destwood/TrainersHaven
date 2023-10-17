import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, jumpToPage, removeFromFav } from "../store/actions";
import "./style.css";
import style from "./Favourite.module.scss";

import del from "../../assets/delete.svg";

function Favourite() {
  const [toRemove, setToRemove] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.selectedType.fav);
  const [favData, setFavData] = useState(data);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={style.wrapper}>
      <div className={style.pageTitle}>Saved Items</div>
      <div className={style.listContainer}>
        {favData.map((sneaker, index) => (
          <div
            className={`${style.item} ${
              toRemove === index ? style.opacity : ""
            }`}
            key={index}
          >
            <img
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              src={hoveredIndex === index ? sneaker.img[1] : sneaker.img[0]}
              alt={sneaker.Name}
            />
            <div className={style.flex}>
              <div className={style.name}>{sneaker.name}</div>
              <div className={style.price}>$ {sneaker.price}</div>
            </div>
            <div className={style.flex}>
              <div className={style.color}>{sneaker.color}</div>

              {sneaker.size.map((item, sizeIndex) => (
                <>{item} </>
              ))}

              <button
                className={`${style.button} buttonMoveToCart`}
                onClick={() => {
                  setToRemove(index);
                  setTimeout(() => {
                    dispatch(addToCart(sneaker));
                    favData.splice(index, 1);
                    setFavData([...favData]);
                    dispatch(removeFromFav(index));
                    setToRemove();

                    dispatch(jumpToPage(2));
                    if (favData.length === 1) {
                      console.log("here");
                    }
                  }, 1000);
                }}
              >
                <p>To cart</p>
                <svg
                  stroke-width="4"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={style.removeContainer}
              onClick={() => {
                favData.splice(index, 1);
                setFavData([...favData]);
                dispatch(removeFromFav(index));
              }}
            >
              <img src={del} alt="remove" className={style.remove} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourite;
