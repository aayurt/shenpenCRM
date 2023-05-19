import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  name?: string;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
