import { SubCategory as TSubCategory } from "../api/subCategory/SubCategory";

export const SUBCATEGORY_TITLE_FIELD = "title";

export const SubCategoryTitle = (record: TSubCategory): string => {
  return record.title || String(record.id);
};
