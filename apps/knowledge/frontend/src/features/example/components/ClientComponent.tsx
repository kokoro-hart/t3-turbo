"use client";

import React from "react";
import Box from "@mui/material/Box";

import { trpc } from "~/trpc/client";

export function ClientComponent() {
  const [data] = trpc.chat.getMessages.useSuspenseQuery();
  return <Box>{JSON.stringify(data)}</Box>;
}
