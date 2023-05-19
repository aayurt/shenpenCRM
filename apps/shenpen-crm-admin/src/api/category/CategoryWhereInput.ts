import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { SubCategoryListRelationFilter } from "../subCategory/SubCategoryListRelationFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  posts?: PostListRelationFilter;
  subCategories?: SubCategoryListRelationFilter;
  title?: StringFilter;
};
