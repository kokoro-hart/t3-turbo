import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン",
  },
};

export const VariantText: Story = {
  args: {
    children: "ボタン",
    variant: "text",
  },
};

export const VariantContained: Story = {
  args: {
    children: "ボタン",
    variant: "contained",
  },
};

export const VariantOutlined: Story = {
  args: {
    children: "ボタン",
    variant: "outlined",
  },
};

export const SizeSmall: Story = {
  args: {
    children: "ボタン",
    size: "small",
    variant: "outlined",
  },
};

export const SizeMedium: Story = {
  args: {
    children: "ボタン",
    size: "medium",
    variant: "outlined",
  },
};

export const SizeLarge: Story = {
  args: {
    children: "ボタン",
    size: "large",
    variant: "outlined",
  },
};

export const ColorSecondary: Story = {
  args: {
    children: "ボタン",
    color: "secondary",
    variant: "outlined",
  },
};

export const ColorInfo: Story = {
  args: {
    children: "ボタン",
    color: "info",
    variant: "outlined",
  },
};

export const ColorSuccess: Story = {
  args: {
    children: "ボタン",
    color: "success",
    variant: "outlined",
  },
};

export const ColorWarning: Story = {
  args: {
    children: "ボタン",
    color: "warning",
    variant: "outlined",
  },
};

export const ColorError: Story = {
  args: {
    children: "ボタン",
    color: "error",
    variant: "outlined",
  },
};

export const Disabled: Story = {
  args: {
    children: "ボタン",
    disabled: true,
    variant: "outlined",
  },
};
