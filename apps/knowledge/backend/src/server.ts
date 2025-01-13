import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";

import { appRouter } from "./routes"; // ← 既存のappRouter
import { createTRPCContext } from "./trpc";

const PORT = 8000;

async function main() {
  const app = express();
  app.use(cors());

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext: createTRPCContext,
    }),
  );

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/trpc`);
  });
}

main().catch(console.error);
