import React from "react";
import { useSelector } from "react-redux";
import style from "./Favourite.module.scss";
function Favourite() {
  const favData = useSelector((state) => state.selectedType.fav);
  console.log(favData);
  return (
    <div className="">
      {favData.map((sneaker, index) => (
        <div className={style.item}>
          <div>{sneaker.name}</div>
          <img src={sneaker.img} alt={sneaker.Name} />
          <div className="">$ {sneaker.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Favourite;
