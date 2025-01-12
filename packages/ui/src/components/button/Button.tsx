import { ComponentPropsWithoutRef, forwardRef } from "react";
import MuiButton from "@mui/material/Button";

type ButtonProps = ComponentPropsWithoutRef<typeof MuiButton>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiButton {...props} ref={ref}>
        {children}
      </MuiButton>
    );
  },
);

Button.displayName = "Button";
