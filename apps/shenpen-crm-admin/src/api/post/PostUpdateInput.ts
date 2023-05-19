import { AuthorUpdateManyWithoutPostsInput } from "./AuthorUpdateManyWithoutPostsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TagUpdateManyWithoutPostsInput } from "./TagUpdateManyWithoutPostsInput";
import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  author?: AuthorUpdateManyWithoutPostsInput;
  category?: CategoryWhereUniqueInput | null;
  enabled?: boolean | null;
  publishedAt?: Date | null;
  tag?: TagUpdateManyWithoutPostsInput;
  title?: InputJsonValue;
};
