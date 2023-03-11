import { login } from "./login";

import type Channel from "../types/Channel";
import type Message from "../types/Message";

export async function find(
  serverId: string,
  channelId: string,
): Promise<Channel> {
  return login().then(async function (opts) {
    return fetch(
      `https://127.0.0.1:8000/api/servers/${serverId}/channels/${channelId}`,
      {
        headers: opts.headers,
      },
    ).then((response) => response.json());
  });
}

export async function findAllMessages(
  serverId: string,
  channelId: string,
): Promise<Message[]> {
  return login().then(async function (opts) {
    return fetch(
      `https://127.0.0.1:8000/api/servers/${serverId}/channels/${channelId}/messages`,
      {
        headers: opts.headers,
      },
    ).then((response) => response.json());
  });
}
