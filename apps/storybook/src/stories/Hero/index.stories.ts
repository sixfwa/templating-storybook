import type { Meta, StoryObj } from "@storybook/react";
import Hero from "@repo/ui/hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    ctaLabel: "Contact Us",
    theme: "dark",
    heading: "Welcome!",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};

export const Light: Story = {
  args: {
    ctaLabel: "Sign Up",
    theme: "light",
    heading: "Who we are",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    imageURL:
      "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};

export const Business: Story = {
  args: {
    ctaLabel: "Contact Sales",
    theme: "business",
    heading: "What we are researching",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    imageURL:
      "https://images.unsplash.com/photo-1721778775422-8cf9894040a9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};

export const Corporate: Story = {
  args: {
    ctaLabel: "Find out more",
    theme: "corporate",
    heading: "Sustainability",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    imageURL:
      "https://images.unsplash.com/photo-1455793222120-98f37a8d4ede?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
};
