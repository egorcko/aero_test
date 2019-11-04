import React from "react";
import { uniqueId } from "lodash";
import Icon from "@/components/Icon/Icon";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, onChange, checked, disabled, value }) => {
  const id = uniqueId();
  return (
    <label className={styles.root} htmlFor={id}>
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        id={id}
        value={value}
        className={styles.input}
      />
      <div className={styles.square}>
        <Icon className={styles.icon} src="./icons/check.svg" />
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
