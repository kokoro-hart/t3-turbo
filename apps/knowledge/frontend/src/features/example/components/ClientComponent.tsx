"use client";

import React from "react";
import Box from "@mui/material/Box";

import { trpc } from "~/trpc/client";

export function ClientComponent() {
  const [messages] = trpc.example.getMessages.useSuspenseQuery();
  return <Box>messages: {JSON.stringify(messages)}</Box>;
}
