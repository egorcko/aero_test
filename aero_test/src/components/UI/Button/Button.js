import React from "react";
import styles from "./Button.module.scss";

const Button = ({ className, value, icon, fit, skin, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.root} ${styles[`skin_${skin}`]} ${fit &&
        styles.fit} ${className}`}
    >
      {icon}
      {value}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  value: "",
  icon: null,
  fit: false,
  skin: "default",
  onClick() {}
};

export default Button;
