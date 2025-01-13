import React, { Suspense } from "react";
import Stack from "@mui/material/Stack";

import { LinearProgress } from "@dir/ui";

import { ClientComponent } from "./ClientComponent";
import { ServerAction } from "./ServerAction";
import { ServerComponent } from "./ServerComponent";

export function Example() {
  return (
    <Stack gap={2}>
      <Stack>
        <h2>ServerComponent</h2>
        <Suspense fallback={<LinearProgress />}>
          <ServerComponent />
        </Suspense>
      </Stack>

      <Stack>
        <h2>ServerAction（revalidate ServerComponent）</h2>
        <ServerAction />
      </Stack>

      <Stack>
        <h2>ClientComponent</h2>
        <Suspense fallback={<LinearProgress />}>
          <ClientComponent />
        </Suspense>
      </Stack>
    </Stack>
  );
}
