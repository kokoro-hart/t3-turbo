"use server";

import { revalidatePath } from "next/cache";

import { validators } from "@dir/share";

import { trpc } from "~/trpc/server";
import { RouterOutputs } from "~/trpc/types";

type SendMessageResult =
  | RouterOutputs["example"]["sendMessage"]
  | { error: unknown }
  | undefined;

export async function sendMessage(_: SendMessageResult, formData: FormData) {
  const validatedFields = validators.example.sendMessageInput.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten(),
    };
  }

  const input = validatedFields.data;

  try {
    const result = await trpc.example.sendMessage.mutate(input);
    revalidatePath("/");
    return result;
  } catch (error) {
    console.log(error);
  }
}
