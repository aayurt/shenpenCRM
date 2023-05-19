import { Category } from "../category/Category";

export type SubCategory = {
  categoryId?: Array<Category>;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string;
  updatedAt: Date;
};
