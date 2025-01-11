"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colorSchemes: { light: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});
