import type User from "./User";

export default interface Message {
  id: string;
  content: string;
  createdAt: string;
  updateAt?: string;
  user: User;
}
