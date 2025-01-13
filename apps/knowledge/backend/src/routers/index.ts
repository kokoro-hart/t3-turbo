import { createTRPCRouter } from "../trpc";
import { exampleRouter } from "./example.router";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
