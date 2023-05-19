import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SubCategoryWhereInput = {
  categoryId?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
};
