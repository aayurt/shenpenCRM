import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type TagWhereInput = {
  id?: StringFilter;
  posts?: PostListRelationFilter;
  title?: StringFilter;
};
