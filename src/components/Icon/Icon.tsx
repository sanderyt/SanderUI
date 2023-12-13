import React from "react";

import type { FC } from "react";

import { icons } from "./icons";

const Icon: FC<Props> = ({
  name,
  width = 24,
  height = 24,
  color = "#000000",
  ...props
}) => {
  const icon = icons[name];

  if (!icon) {
    return null;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {icon}
    </svg>
  );
};

export default Icon;
