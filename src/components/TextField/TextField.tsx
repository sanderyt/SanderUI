import React, { type FC } from "react";
import classNames from "classnames/bind";

import styles from "./TextField.module.scss";

import type { TextFieldProps } from "./TextField.types";

const cx = classNames.bind(styles);

const TextField: FC<TextFieldProps> = ({
  name,
  label,
  type = "text",
  error,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        <input
          type={type}
          className={cx("textField", { textFieldError: error })}
          onChange={onChange}
          {...props}
        />
      </label>
      <div className={styles.error}>{error?.message}</div>
    </div>
  );
};

export default TextField;
