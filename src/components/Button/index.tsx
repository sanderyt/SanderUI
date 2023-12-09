import React from "react";
import type { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
