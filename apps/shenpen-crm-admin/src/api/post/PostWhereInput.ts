import { AuthorListRelationFilter } from "../author/AuthorListRelationFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PostWhereInput = {
  author?: AuthorListRelationFilter;
  category?: CategoryWhereUniqueInput;
  enabled?: BooleanNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  tag?: TagListRelationFilter;
  title?: JsonFilter;
};
