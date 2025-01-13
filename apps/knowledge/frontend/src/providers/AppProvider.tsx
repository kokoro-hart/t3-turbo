import { PropsWithChildren } from "react";

import { MuiProvider } from "@dir/ui";

import { TrpcClientProvider } from "./TrpcClientProvider";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <TrpcClientProvider>
      <MuiProvider>{children}</MuiProvider>
    </TrpcClientProvider>
  );
}
