import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
