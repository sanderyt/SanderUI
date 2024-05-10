import React from "react";

import type { FC } from "react";

import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner: FC = () => {
  return (
    <div className={styles.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
