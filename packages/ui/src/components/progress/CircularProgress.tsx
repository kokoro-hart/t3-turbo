import React, { ComponentPropsWithoutRef } from "react";
import MuiCircularProgress from "@mui/material/CircularProgress";

type MuiCircularProgressProps = ComponentPropsWithoutRef<
  typeof MuiCircularProgress
>;

export function CircularProgress(props: MuiCircularProgressProps) {
  return <MuiCircularProgress {...props} />;
}
