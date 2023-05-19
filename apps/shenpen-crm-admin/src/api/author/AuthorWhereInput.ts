import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type AuthorWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  posts?: PostListRelationFilter;
};
