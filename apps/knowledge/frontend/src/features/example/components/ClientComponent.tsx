"use client";

import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { trpc } from "~/trpc/client";

export function ClientComponent() {
  const [data] = trpc.chat.getMessages.useSuspenseQuery();
  return (
    <Stack>
      <h2>ClientComponent</h2>
      <Box>{JSON.stringify(data)}</Box>
    </Stack>
  );
}
