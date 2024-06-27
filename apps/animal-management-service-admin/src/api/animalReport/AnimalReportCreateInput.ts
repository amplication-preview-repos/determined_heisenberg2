import { InputJsonValue } from "../../types";

export type AnimalReportCreateInput = {
  description?: string | null;
  location?: InputJsonValue;
  status?: "Option1" | null;
  timestamp?: Date | null;
  userId?: string | null;
};
