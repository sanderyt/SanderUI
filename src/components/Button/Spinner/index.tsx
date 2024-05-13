import React from "react";

import type { FC } from "react";

import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner: FC = () => {
  return <span className={styles.loader}></span>;
};

export default LoadingSpinner;
