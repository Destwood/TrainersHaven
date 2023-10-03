import React from "react";
import style from "./Footer.module.scss";

import instagram from "../../assets/instagramWhite.svg";
import facebook from "../../assets/facebookWhite.svg";
import telegram from "../../assets/telegramWhite.svg";
import twitter from "../../assets/twitterWhite.svg";

function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.info}>
          <div className="">
            <h3 className={style.title}>about</h3>
            <a href="/" className={style.infoLink}>
              News
            </a>
            <a href="/" className={style.infoLink}>
              Careers
            </a>
            <a href="/" className={style.infoLink}>
              Investors
            </a>
            <a href="/" className={style.infoLink}>
              Purpose
            </a>
          </div>
          <div className="">
            <h3 className={style.title}>help</h3>
            <a href="/" className={style.infoLink}>
              Order Status
            </a>
            <a href="/" className={style.infoLink}>
              Order Status
            </a>
            <a href="/" className={style.infoLink}>
              Shipping and Delivery
            </a>
            <a href="/" className={style.infoLink}>
              Returns
            </a>
            <a href="/" className={style.infoLink}>
              Gift Cards
            </a>
            <a href="/" className={style.infoLink}>
              Contact Us
            </a>
          </div>
          <div className="">
            <h3 className={style.title}>privaticy & policy</h3>
            <a href="/" className={style.infoLink}>
              Terms of Sale
            </a>
            <a href="/" className={style.infoLink}>
              Terms of Use
            </a>
            <a href="/" className={style.infoLink}>
              Privacy Policy
            </a>
          </div>
        </div>
        <div className={style.social}>
          <a className={style.link} href="/">
            <img src={instagram} alt="" className={style.icon} />
          </a>
          <a className={style.link} href="/">
            <img src={facebook} alt="" className={style.icon} />
          </a>
          <a className={style.link} href="/">
            <img src={telegram} alt="" className={style.icon} />
          </a>
          <a className={style.link} href="/">
            <img src={twitter} alt="" className={style.icon} />
          </a>
        </div>
      </div>

      <div className={style.policy}>
        © 2023 TrainersHaven, Inc. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
