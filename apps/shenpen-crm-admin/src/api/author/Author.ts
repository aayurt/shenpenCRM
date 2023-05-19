import { Post } from "../post/Post";

export type Author = {
  createdAt: Date;
  id: string;
  name: string;
  posts?: Array<Post>;
  updatedAt: Date;
};
