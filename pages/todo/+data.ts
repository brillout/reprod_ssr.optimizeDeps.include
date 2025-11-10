// https://vike.dev/data

import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(_pageContext: PageContextServer) {
  // NOTE: This to-do list is only for demonstration — it doesn’t save your changes.
  // Go to https://vike.dev/new and select a Database tool for an example of how to persist the to-do list.
  return { todo: [{ text: "Buy milk" }, { text: "Buy strawberries" }] };
}
