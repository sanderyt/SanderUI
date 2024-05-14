import React from "react";
import Checkbox from "./Checkbox"; // adjust the path as necessary

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Remember me",
  },
  render: (args) => <Checkbox {...args} onChange={() => {}} />,
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: "Remember me",
  },
  render: (args) => <Checkbox {...args} onChange={() => {}} />,
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: "Remember me",
  },
  render: (args) => <Checkbox {...args} onChange={() => {}} />,
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: "Remember me",
  },
  render: (args) => <Checkbox {...args} onChange={() => {}} />,
};
