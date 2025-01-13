import React from "react";
import Box from "@mui/material/Box";

import { trpc } from "~/trpc/server";

export async function ServerComponent() {
  const data = await trpc.chat.getMessages.query();
  return <Box>{JSON.stringify(data)}</Box>;
}
