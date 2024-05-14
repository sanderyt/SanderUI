import Modal from "./index";
import React, { useState } from "react";

import Button from "../Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <div>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </Button>
        <Modal
          isOpen={isOpen}
          title="Modal title"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <p className="text-align">Put here the content inside the modal</p>
          <div className="flex justify-end mt-3">
            <Button
              className="mr-2"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Confirm
            </Button>
            <Button
              variant="secondary-gray"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: "This is content in the card",
  },
};
