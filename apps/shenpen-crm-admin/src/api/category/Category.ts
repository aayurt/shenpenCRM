import { Post } from "../post/Post";
import { SubCategory } from "../subCategory/SubCategory";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  posts?: Array<Post>;
  subCategories?: Array<SubCategory>;
  title: string;
  updatedAt: Date;
};
