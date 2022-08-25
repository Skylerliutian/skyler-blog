import React from "react";

import BGImg from "./img/bg-img.svg";
import CSSImg from "./img/css.svg";
import HTMLImg from "./img/html.svg";
import GearImg from "./img/gear.svg";
import styles from "./styles.module.css";

const IntroPart = () => {
  return (
    <div className={styles.introPart}>
      <div>wer</div>
      <div className={styles.imgContainer}>
        <BGImg className={styles.bgImg} />
        <CSSImg className={styles.cssImg} />
        <HTMLImg className={styles.htmlImg} />
        <GearImg className={styles.gearImg} />
      </div>
    </div>
  );
};

export default IntroPart;
