"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { createTrpcClient, trpc } from "~/trpc/client";
import { getQueryClient } from "~/trpc/query";

export function TrpcClientProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();
  const [client] = useState(() => createTrpcClient());

  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={client} queryClient={queryClient}>
        {children}
      </trpc.Provider>
    </QueryClientProvider>
  );
}
