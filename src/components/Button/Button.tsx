import classNames from "classnames/bind";
import React from "react";

import LoadingSpinner from "./Spinner";

import type { FC } from "react";
import type { Props } from "./Button.types";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button: FC<Props> = ({
  children,
  className,
  onClick,
  size = "md",
  variant = "primary",
  isLoading,
  type,
  ...props
}) => {
  return (
    <button
      className={`${cx("button", {
        isPrimary: variant === "primary",
        isSecondary: variant === "secondary",
        isSecondaryGray: variant === "secondary-gray",
        isDanger: variant === "danger",
        isSm: size === "sm",
        isMd: size === "md",
        isLg: size === "lg",
        isXl: size === "xl",
        is2Xl: size === "2xl",
      })} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;
