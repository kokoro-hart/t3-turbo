import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import MuiLinearProgress from "@mui/material/LinearProgress";

type MuiLinearProgressProps = ComponentPropsWithoutRef<
  typeof MuiLinearProgress
>;

export function LinearProgress(props: MuiLinearProgressProps) {
  return <MuiLinearProgress {...props} />;
}
