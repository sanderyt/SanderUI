import { FaHeart, FaRegTrashAlt } from "react-icons/fa";
import Button from "./index";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button CTA",
    variant: "primary",
    isLoading: false,
    size: "md",
    onClick: () => {
      alert("This is working!");
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Button CTA",
    variant: "secondary",
    size: "md",
    isLoading: false,
    onClick: () => {
      alert("This is working!");
    },
  },
};

export const Outlined: Story = {
  args: {
    children: "Button CTA",
    variant: "secondary-gray",
    isLoading: false,
    onClick: () => {
      alert("This is working!");
    },
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    children: "Button CTA",
    variant: "danger",
    isLoading: false,
    onClick: () => {
      alert("This is working!");
    },
    size: "md",
  },
};

export const ButtonWithLeftIcon: Story = {
  args: {
    children: "Delete",
    variant: "danger",
    isLoading: false,
    onClick: () => {
      alert("This is working!");
    },
    size: "md",
    leftIcon: <FaRegTrashAlt />,
  },
};

export const ButtonWithRightIcon: Story = {
  args: {
    children: "Like",
    variant: "primary",
    isLoading: false,
    onClick: () => {
      alert("This is working!");
    },
    size: "md",
    rightIcon: <FaHeart />,
  },
};
