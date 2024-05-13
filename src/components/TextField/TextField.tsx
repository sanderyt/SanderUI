import classNames from "classnames/bind";
import React, { forwardRef } from "react";

import type { TextFieldProps } from "./TextField.types";

import styles from "./TextField.module.scss";

const cx = classNames.bind(styles);

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ name, label, type = "text", error, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <label className={styles.label}>
          {label}
          <input
            name={name}
            type={type}
            className={cx("textField", { textFieldError: error })}
            ref={ref}
            {...props}
          />
        </label>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);

export default TextField;
