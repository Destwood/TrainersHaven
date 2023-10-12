import React from "react";
import { useSelector } from "react-redux";
import style from "./Cart.module.scss";
function Cart() {
  const cartData = useSelector((state) => state.selectedType.cart);

  return (
    <div className="">
      {cartData.map((sneaker, index) => (
        <div className={style.item}>
          <div>{sneaker.name}</div>
          <img src={sneaker.img} alt={sneaker.Name} />
          <div className="">$ {sneaker.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
