import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";

import { PORT } from "./configs";
import { appRouter } from "./routers";
import { createTRPCContext } from "./trpc";

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
