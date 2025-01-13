"use client";

import React, { useActionState } from "react";

import { sendMessage } from "../actions";

export const ServerAction = () => {
  const [state, formAction, isPending] = useActionState(sendMessage, undefined);
  return (
    <form action={formAction}>
      <p>isPending: {isPending.toString()}</p>
      <p>result: {JSON.stringify(state)}</p>
      <input type="text" name="content" placeholder="メッセージを入力" />
      <button type="submit" disabled={isPending}>
        送信
      </button>
    </form>
  );
};
