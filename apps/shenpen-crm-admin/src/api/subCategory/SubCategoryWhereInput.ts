import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SubCategoryWhereInput = {
  categoryId?: CategoryListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
};
