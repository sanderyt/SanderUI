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
    children: "Primary 😃",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
  },
};

export const CTA: Story = {
  args: {
    children: "Buy now 😃",
  },
};
