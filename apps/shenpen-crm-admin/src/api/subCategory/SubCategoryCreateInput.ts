import { CategoryCreateNestedManyWithoutSubCategoriesInput } from "./CategoryCreateNestedManyWithoutSubCategoriesInput";

export type SubCategoryCreateInput = {
  categoryId?: CategoryCreateNestedManyWithoutSubCategoriesInput;
  description?: string | null;
  title: string;
};
