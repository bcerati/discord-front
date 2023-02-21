import Channel from "./Channel";

export default interface ServerCategory {
  id: string;
  name: string;
  createdAt: string;
  channels: Channel[];
}
