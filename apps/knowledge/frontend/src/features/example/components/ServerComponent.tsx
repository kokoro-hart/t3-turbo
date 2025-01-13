import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { trpc } from "~/trpc/server";

export async function ServerComponent() {
  const data = await trpc.chat.getMessages.query();
  return (
    <Stack>
      <h2>ServerComponent</h2>
      <Box>{JSON.stringify(data)}</Box>
    </Stack>
  );
}
