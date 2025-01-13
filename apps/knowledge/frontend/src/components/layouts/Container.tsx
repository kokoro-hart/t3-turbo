import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import MuiContainer from "@mui/material/Container";

type ContainerProps = ComponentPropsWithoutRef<typeof MuiContainer>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, maxWidth = "md", ...props }, ref) => {
    return (
      <MuiContainer maxWidth={maxWidth} {...props} ref={ref}>
        {children}
      </MuiContainer>
    );
  },
);

Container.displayName = "Container";
