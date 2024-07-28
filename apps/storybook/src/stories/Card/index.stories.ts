import type { Meta, StoryObj } from "@storybook/react";
import { CardElement } from ".";

const meta = {
  title: "Components/Card",
  component: CardElement,
} satisfies Meta<typeof CardElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardLight: Story = {
  args: {
    theme: "light",
  },
};
