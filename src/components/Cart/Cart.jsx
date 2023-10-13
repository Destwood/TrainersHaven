import React from "react";
import { useSelector } from "react-redux";
import style from "./Cart.module.scss";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/actions";
function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.selectedType.cart);

  return (
    <div className="">
      {cartData.map((sneaker, index) => (
        <div
          className={style.item}
          onClick={() => {
            dispatch(removeFromCart(index));
          }}
        >
          <img src={sneaker.img[0]} alt={sneaker.name} />
          <div>{sneaker.name}</div>
          <div className="">$ {sneaker.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
