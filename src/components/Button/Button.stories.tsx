import Button from "./index";
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
    onClick: () => {
      alert("This is working!");
    },
  },
};

export const Outlined: Story = {
  args: {
    children: "Button CTA",
    variant: "secondary-gray",
    onClick: () => {
      alert("This is working!");
    },
    size: "md",
  },
};
