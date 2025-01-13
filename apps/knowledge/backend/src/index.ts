import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AppRouter} from "./routers";
import { appRouter } from "./routers";
import { createCallerFactory, createTRPCContext } from "./trpc";

/**
 * Create a server-side caller for the tRPC API
 */
const createCaller = createCallerFactory(appRouter);

/**
 * Inference helpers for input types
 **/
type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 **/
type RouterOutputs = inferRouterOutputs<AppRouter>;

export {
  createTRPCContext,
  appRouter,
  createCaller,
  type AppRouter,
  type RouterInputs,
  type RouterOutputs,
};
