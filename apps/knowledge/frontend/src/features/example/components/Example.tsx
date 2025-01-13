import React, { Suspense } from "react";
import Stack from "@mui/material/Stack";

import { CircularProgress } from "@dir/ui";

import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";

export function Example() {
  return (
    <Stack>
      <Stack>
        <h2>ClientComponent</h2>
        <Suspense fallback={<CircularProgress />}>
          <ClientComponent />
        </Suspense>
      </Stack>
      <Stack>
        <h2>ServerComponent</h2>
        <Suspense fallback={<CircularProgress />}>
          <ServerComponent />
        </Suspense>
      </Stack>
    </Stack>
  );
}
