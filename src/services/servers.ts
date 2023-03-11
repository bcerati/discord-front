import Server from "../types/Server";
import ServerCategory from "../types/ServerCategory";
import { login } from "./login";

export async function findAll(): Promise<any[]> {
  return login().then(async function (opts) {
    return fetch("https://127.0.0.1:8000/api/servers", {
      headers: opts.headers,
    }).then((response) => response.json());
  });
}

export async function find(serverId: string): Promise<Server> {
  return login().then(async function (opts) {
    return fetch(`https://127.0.0.1:8000/api/servers/${serverId}`, {
      headers: opts.headers,
    }).then((response) => response.json());
  });
}

export async function findCategories(
  serverId: string,
): Promise<ServerCategory[]> {
  return login().then(async function (opts) {
    return fetch(`https://127.0.0.1:8000/api/servers/${serverId}/categories`, {
      headers: opts.headers,
    }).then((response) => response.json());
  });
}
