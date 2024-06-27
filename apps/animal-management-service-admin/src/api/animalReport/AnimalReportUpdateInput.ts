import { InputJsonValue } from "../../types";

export type AnimalReportUpdateInput = {
  description?: string | null;
  location?: InputJsonValue;
  status?: "Option1" | null;
  timestamp?: Date | null;
  userId?: string | null;
};
