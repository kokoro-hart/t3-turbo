import type { Preview } from "@storybook/react";
import React from "react";

import { MuiProvider } from "../src/providers/MuiProvider";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <MuiProvider>
          <Story />
        </MuiProvider>
      );
    },
  ],
};

export default preview;
