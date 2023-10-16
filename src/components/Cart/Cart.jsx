import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Cart.module.scss";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/actions";
import { addToFav, removeFromFav } from "../store/actions";
import fav from "../../assets/fav.svg";
import favEnd from "../../assets/favEnd.svg";
function Cart() {
  const [IsSneakerInFavorites, SetIsSneakerInFavorites] = useState(false);
  const favItems = useSelector((state) => state.selectedType.fav);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.selectedType.cart);
  const [delivertPrice, setDeliveryPrice] = useState(0);
  const isSneakerInFavorites = (sneaker, favorites) => {
    return favorites.some((favorite) => favorite.name === sneaker.Name);
  };
  let total = 0;
  cartData.forEach((sneaker) => {
    total += parseFloat(sneaker.price);
  });
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.bagContent}>
          <div className={style.header}>My bag</div>
          <div className={style.list}>
            {cartData.map((sneaker, index) => (
              <div className={style.item}>
                <img src={sneaker.img[0]} alt={sneaker.name} />
                <div className={style.info}>
                  <div className={style.price}>$ {sneaker.price}</div>
                  <div className={style.name}>{sneaker.name}</div>
                  <div className={style.details}>
                    <div className="">{sneaker.color}</div>
                    <div className={style.size}>
                      {Array.isArray(sneaker.size) ? (
                        <select className={style.size} onChange={(e) => {}}>
                          {sneaker.size.map((item, sizeIndex) => (
                            <option key={sizeIndex} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <>46</>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(index));
                  }}
                  className={style.close}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className={style.total}>Total Price: ${total.toFixed(2)}</div>
        </div>

        <div className={style.checkout}>
          <div className={style.title}>Total:</div>
          <div className={style.subTotal}>
            <div className={style.text}>sub-total</div>
            <div className={style.price}>
              $ {(total + delivertPrice).toFixed(2)}
            </div>
          </div>
          <div className={style.deliveryConteiner}>
            <div className={style.text}>Delivery</div>
            <select
              className={style.delivery}
              onChange={(e) => {
                // Видаліть цей обробник подій
                const selectedValue = e.target.value;
                if (selectedValue === "Standart - free") {
                  setDeliveryPrice(0);
                } else if (selectedValue === "Express Delivery - $10") {
                  setDeliveryPrice(10);
                } else if (
                  selectedValue === "Gift Wrapping and Delivery - $25"
                ) {
                  setDeliveryPrice(25);
                }
              }}
            >
              <option>Standart - free</option>
              <option>Express Delivery - $10</option>
              <option>Gift Wrapping and Delivery - $25</option>
            </select>
          </div>

          <button>checkout</button>
          {/* <div>cards</div>
          <div>note</div> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
