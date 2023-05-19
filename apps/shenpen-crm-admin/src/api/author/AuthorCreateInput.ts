import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  name: string;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
