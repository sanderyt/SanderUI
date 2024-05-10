import React from "react";

import type { FC } from "react";
import type { Props } from "./Card.types";

import styles from "./Card.module.scss";

const Card: FC<Props> = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
