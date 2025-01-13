import type { Meta, StoryObj } from "@storybook/react";

import { LinearProgress } from "./LinearProgress";

const meta = {
  component: LinearProgress,
} satisfies Meta<typeof LinearProgress>;

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
