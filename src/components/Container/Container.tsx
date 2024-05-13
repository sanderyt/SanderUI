import React from "react";

import type { FC, PropsWithChildren } from "react";

import styles from "./Container.module.scss";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.parentContainer}>{children}</div>;
};

export default Container;
