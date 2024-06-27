import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const VolunteerProfileCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="availability"
          source="availability"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="email" source="email" type="email" />
        <SelectInput
          source="experience"
          label="experience"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
