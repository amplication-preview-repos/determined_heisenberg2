import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AnimalReportWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: JsonFilter;
  status?: "Option1";
  timestamp?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
