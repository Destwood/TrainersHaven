import React from "react";
import style from "./Preview.module.scss";
import { useSelector } from "react-redux";

function Preview() {
  const cartData = useSelector((state) => state.selectedType.cart);
  return (
    <div className={style.cartPreview}>
      <div className={style.previewHeader}>
        <div className={style.previewHeader_Title}>
          My Bag,
          <span> {cartData.length} items</span>
        </div>
        <button>X</button>
      </div>
      <div className={style.previewList}>
        {cartData.map((item, index) => (
          <div className={style.previewItem}>
            <img src={item.img[0]} alt="" className={style.previewImg} />
            <div className="">
              <div className="">{item.name}</div>
              <div className="">$ {item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.previewFooter}>
        <button className={style.viewBag}>View bag</button>
        <button className={style.checkout}>Checkout</button>
      </div>
      <div className={style.previewNote}>Free Delivery Worldwide*</div>
    </div>
  );
}

export default Preview;
