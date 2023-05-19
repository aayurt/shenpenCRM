import { PostCreateNestedManyWithoutTagsInput } from "./PostCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  posts?: PostCreateNestedManyWithoutTagsInput;
  title: string;
};
