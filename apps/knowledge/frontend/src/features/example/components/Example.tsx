import React, { Suspense } from "react";
import Stack from "@mui/material/Stack";

import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";

export function Example() {
  return (
    <Stack>
      <Suspense fallback={<>loading</>}>
        <ClientComponent />
      </Suspense>
      <Suspense fallback={<>loading</>}>
        <ServerComponent />
      </Suspense>
    </Stack>
  );
}
