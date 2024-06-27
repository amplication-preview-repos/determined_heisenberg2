import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VolunteerProfileWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  experience?: "Option1";
  fullName?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  userId?: StringNullableFilter;
};
