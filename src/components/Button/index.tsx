import React from "react";
import type { FC } from "react";

import type { Props } from "./Button.types";

import styles from "./Button.module.scss";

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
