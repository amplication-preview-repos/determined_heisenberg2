import { JsonValue } from "type-fest";

export type AnimalReport = {
  createdAt: Date;
  description: string | null;
  id: string;
  location: JsonValue;
  status?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
  userId: string | null;
};
