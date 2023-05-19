import { AuthorCreateNestedManyWithoutPostsInput } from "./AuthorCreateNestedManyWithoutPostsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";
import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  author?: AuthorCreateNestedManyWithoutPostsInput;
  category?: CategoryWhereUniqueInput | null;
  enabled?: boolean | null;
  publishedAt?: Date | null;
  tag?: TagCreateNestedManyWithoutPostsInput;
  title?: InputJsonValue;
};
