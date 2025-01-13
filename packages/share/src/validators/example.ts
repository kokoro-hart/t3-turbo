import { z } from "zod";

export const exampleValidators = {
  sendMessageInput: z.object({
    content: z.string().trim().min(1, "メッセージを入力してください"),
  }),
};
