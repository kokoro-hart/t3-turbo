import React from "react";
import Box from "@mui/material/Box";

import { trpc } from "~/trpc/server";

export async function ServerComponent() {
  const messages = await trpc.example.getMessages.query();
  return <Box>messages: {JSON.stringify(messages)}</Box>;
}
