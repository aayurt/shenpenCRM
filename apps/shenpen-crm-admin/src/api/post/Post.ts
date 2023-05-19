import { Author } from "../author/Author";
import { Category } from "../category/Category";
import { Tag } from "../tag/Tag";
import { JsonValue } from "type-fest";

export type Post = {
  author?: Array<Author>;
  category?: Category | null;
  createdAt: Date;
  enabled: boolean | null;
  id: string;
  publishedAt: Date | null;
  tag?: Array<Tag>;
  title: JsonValue;
  updatedAt: Date;
};
