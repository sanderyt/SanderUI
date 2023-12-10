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
    onClick: () => {
      alert("This is working!");
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Button CTA",
    variant: "secondary",
    onClick: () => {
      alert("This is working!");
    },
  },
};
