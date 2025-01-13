import { createTRPCClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import type { AppRouter } from "./types";
import { env } from "~/env";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      transformer: superjson,
      url: env.NEXT_PUBLIC_API_BASE_URL,
    }),
  ],
});
