import type { Meta, StoryObj } from "@storybook/react";
import { Table } from ".";

const meta = {
  title: "Table/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleTable: Story = {
  args: {
    columnNames: ["ID", "Name", "Invoice Id", "Status"],
    theme: "dark",
  },
};
