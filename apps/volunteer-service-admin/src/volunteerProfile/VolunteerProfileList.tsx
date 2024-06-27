import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VolunteerProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Volunteer Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="availability" source="availability" />
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="experience" source="experience" />
        <TextField label="fullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </Datagrid>
    </List>
  );
};
