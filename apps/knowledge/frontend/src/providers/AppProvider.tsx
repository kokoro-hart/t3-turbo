import { PropsWithChildren } from "react";
import { MuiProvider } from "@dir/ui";

export function AppProvider({ children }: PropsWithChildren) {
  return <MuiProvider>{children}</MuiProvider>;
}
