import React, { forwardRef } from "react";
import classNames from "classnames/bind";

import type { CheckboxProps } from "./Checkbox.types";

import styles from "./Checkbox.module.scss";

const cx = classNames.bind(styles);

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, disabled, onChange, label, name, ...props }, ref) => {
    return (
      <label className={cx("checkboxContainer", { disabled })}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={cx("hiddenCheckbox")}
          name={name}
          ref={ref}
          {...props}
        />
        <span className={cx("styledCheckbox", { checked })}>
          {checked && (
            <svg viewBox="0 0 24 24" className={cx("icon")}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
        <span className={cx("label", { disabled })}>{label}</span>
      </label>
    );
  }
);

export default Checkbox;
