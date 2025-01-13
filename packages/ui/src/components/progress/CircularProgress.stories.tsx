import type { Meta, StoryObj } from "@storybook/react";

import { CircularProgress } from "./CircularProgress";

const meta = {
  component: CircularProgress,
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ColorSecondary: Story = {
  args: {
    color: "secondary",
  },
};

export const ColorSuccess: Story = {
  args: {
    color: "success",
  },
};
