import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { publicProcedure } from "../trpc";

let messages = [
  {
    id: 1,
    content: "message 1",
  },
];

export const chatRouter = {
  getMessages: publicProcedure.query(() => messages),
  send: publicProcedure
    .input(z.object({ content: z.string() }))
    .mutation(({ input }) => {
      const newMessage = {
        id: messages.length + 1,
        content: input.content,
      };
      messages.push(newMessage);

      return {
        ...newMessage,
        success: true,
      };
    }),
} satisfies TRPCRouterRecord;
