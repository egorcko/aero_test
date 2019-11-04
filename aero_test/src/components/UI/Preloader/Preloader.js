import React from "react";
import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <svg className={styles.svg} viewBox="22 22 44 44">
        <circle className={styles.circle} cx="44" cy="44" r="20" fill="none" />
      </svg>
    </div>
  );
};

export default Preloader;
