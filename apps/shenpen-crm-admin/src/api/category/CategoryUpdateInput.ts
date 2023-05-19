import { PostUpdateManyWithoutCategoriesInput } from "./PostUpdateManyWithoutCategoriesInput";
import { SubCategoryUpdateManyWithoutCategoriesInput } from "./SubCategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  posts?: PostUpdateManyWithoutCategoriesInput;
  subCategories?: SubCategoryUpdateManyWithoutCategoriesInput;
  title?: string;
};
