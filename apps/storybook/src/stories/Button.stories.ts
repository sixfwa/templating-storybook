import type { Meta, StoryObj } from "@storybook/react";
import Button from "@repo/ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    theme: "light",
    size: "medium",
    status: "primary",
  },
  argTypes: {
    status: {
      control: false,
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    theme: "light",
    size: "medium",
    status: "secondary",
  },
  argTypes: {
    status: {
      control: false,
    },
  },
};
