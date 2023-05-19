import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SubCategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CategoryID" source="categoryId" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
