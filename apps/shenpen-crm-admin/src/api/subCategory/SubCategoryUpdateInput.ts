import { CategoryUpdateManyWithoutSubCategoriesInput } from "./CategoryUpdateManyWithoutSubCategoriesInput";

export type SubCategoryUpdateInput = {
  categoryId?: CategoryUpdateManyWithoutSubCategoriesInput;
  description?: string | null;
  title?: string;
};
