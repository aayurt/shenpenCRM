import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";

export const SubCategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="categoryId"
          reference="Category"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
