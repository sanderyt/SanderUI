import Container from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "This is content in the container",
  },
};
