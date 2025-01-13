import { unstable_httpBatchStreamLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";

import type { AppRouter } from "../../../backend/src/routes/index";

export const trpc = createTRPCReact<AppRouter>();

export function createTrpcClient() {
  if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is required");
  }

  return trpc.createClient({
    links: [
      unstable_httpBatchStreamLink({
        transformer: superjson,
        url: process.env.NEXT_PUBLIC_API_BASE_URL,
        headers() {
          const headers = new Headers();
          headers.set("x-trpc-source", "nextjs-react");
          return headers;
        },
      }),
    ],
  });
}
