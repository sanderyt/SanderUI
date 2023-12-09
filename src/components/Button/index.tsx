import React from "react";
import type { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
