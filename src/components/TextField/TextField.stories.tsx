import TextField from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    label: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "First name",
  },
};
