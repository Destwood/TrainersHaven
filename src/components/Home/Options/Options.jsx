import React from "react";
import styles from "./Options.module.scss";

import man from "../../../assets/Men.jpg";
import women from "../../../assets/Women.jpg";

function Options() {
  return (
    <div className={styles.container}>
      <a
        style={{
          backgroundImage: `url(${man})`,
          backgroundRepeat: "no-repeat",
        }}
        href="/"
        className={`${styles.shopBanner} ${styles.shopBannerMen}`}
      >
        <h3 className={styles.shopBannerTitle}>Men’s Sportswear</h3>
        <div className={`${styles.readMore} `}>
          <p>Read more</p>
        </div>
      </a>
      <a
        style={{
          backgroundImage: `url(${women})`,
          backgroundRepeat: "no-repeat",
        }}
        href="/"
        className={`${styles.shopBanner} ${styles.shopBannerWomen}`}
      >
        <h3 className={styles.shopBannerTitle}>Wonem's Sportswear</h3>
        <div className={`${styles.readMore} `}>
          <p>Read more</p>
        </div>
      </a>
    </div>
  );
}

export default Options;
