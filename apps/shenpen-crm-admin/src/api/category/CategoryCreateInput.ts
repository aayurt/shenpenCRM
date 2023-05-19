import { PostCreateNestedManyWithoutCategoriesInput } from "./PostCreateNestedManyWithoutCategoriesInput";
import { SubCategoryCreateNestedManyWithoutCategoriesInput } from "./SubCategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  posts?: PostCreateNestedManyWithoutCategoriesInput;
  subCategories?: SubCategoryCreateNestedManyWithoutCategoriesInput;
  title: string;
};
