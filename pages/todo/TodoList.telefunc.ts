// We use Telefunc (https://telefunc.com) for data mutations. Being able to use Telefunc for fetching initial data is work-in-progress (https://vike.dev/data-fetching#tools).

export async function onNewTodo({ text }: { text: string }) {
  // NOTE: This to-do list isn't persisted, it's reset when the user navigates away.
  // Go to https://vike.dev/new and select a Database tool for an example of how to persist the to-do list.
  console.log(`Received ${text}`);
}
