import type { TRPCRouterRecord } from "@trpc/server";

import { validators } from "@dir/share";

import { publicProcedure } from "../trpc";

const messages = [
  {
    id: 1,
    content: "message 1",
  },
];

export const exampleRouter = {
  getMessages: publicProcedure.query(() => messages),
  sendMessage: publicProcedure
    .input(validators.example.sendMessageInput)
    .mutation(({ input }) => {
      const newMessage = {
        id: messages.length + 1,
        content: input.content,
      };
      messages.push(newMessage);

      return {
        ...newMessage,
      };
    }),
} satisfies TRPCRouterRecord;
