import Server from "../types/Server";
import ServerCategory from "../types/ServerCategory";

export function findAll(): Promise<any[]> {
  return fetch("https://127.0.0.1:8001/api/servers").then((response) =>
    response.json(),
  );
}

export function find(serverId: string): Promise<Server> {
  return fetch(`https://127.0.0.1:8001/api/servers/${serverId}`).then(
    (response) => response.json(),
  );
}

export function findCategories(serverId: string): Promise<ServerCategory[]> {
  return fetch(
    `https://127.0.0.1:8001/api/servers/${serverId}/categories`,
  ).then((response) => response.json());
}
