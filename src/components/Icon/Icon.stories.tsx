import Icon from "./Icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "radio",
      options: ["trash", "phone"],
    },
    height: { control: "text" },
    width: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "phone",
  },
};
