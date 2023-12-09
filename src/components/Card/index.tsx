import React from "react";
import type { FC, ReactNode } from "react";

import styles from "./Card.module.scss";

interface Props {
  children: ReactNode;
}

const Card: FC<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
