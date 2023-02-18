import Document from "./Document";

export default interface Server {
  id: string;
  name: string;
  createdAt: string;
  image: Document;
}
