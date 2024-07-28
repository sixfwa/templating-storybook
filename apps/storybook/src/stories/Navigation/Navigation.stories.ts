import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "@repo/ui/navigation";

const meta = {
  title: "Components/Navigation",
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    logo: "Dark Logo",
    theme: "dark",
    navLinks: ["Dashboard", "Invoices", "Project"],
    buttonLabel: "Logout",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};

export const Light: Story = {
  args: {
    logo: "Light Logo",
    theme: "light",
    navLinks: ["News & Views", "About Us", "Careers", "Sustainability"],
    buttonLabel: "Contact Sales",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};

export const Corporate: Story = {
  args: {
    logo: "Corporate Logo",
    theme: "corporate",
    navLinks: ["Financial News", "About Us", "Growth"],
    buttonLabel: "Call Us",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};

export const Business: Story = {
  args: {
    logo: "Business Logo",
    theme: "business",
    navLinks: ["Who we are", "Careers", "Growth"],
    buttonLabel: "Contact Us",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};
