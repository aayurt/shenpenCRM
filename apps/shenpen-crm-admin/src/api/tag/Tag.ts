import { Post } from "../post/Post";

export type Tag = {
  createdAt: Date;
  id: string;
  posts?: Array<Post>;
  title: string;
  updatedAt: Date;
};
