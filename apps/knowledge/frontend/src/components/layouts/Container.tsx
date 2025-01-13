import type { ComponentPropsWithoutRef} from "react";
import { forwardRef } from "react";
import MuiContainer from "@mui/material/Container";

type ContainerProps = ComponentPropsWithoutRef<typeof MuiContainer>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, maxWidth = "md", sx, ...props }, ref) => {
    return (
      <MuiContainer {...props} ref={ref}>
        {children}
      </MuiContainer>
    );
  },
);

Container.displayName = "Container";
