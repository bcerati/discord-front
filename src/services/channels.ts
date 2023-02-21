export async function findAllMessages(
  serverId: string,
  channelId: string,
): Promise<any[]> {
  return fetch(
    `https://127.0.0.1:8001/api/servers/${serverId}/${channelId}/messages`,
  ).then((response) => response.json());
}
