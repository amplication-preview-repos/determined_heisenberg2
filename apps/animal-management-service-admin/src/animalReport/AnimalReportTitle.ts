import { AnimalReport as TAnimalReport } from "../api/animalReport/AnimalReport";

export const ANIMALREPORT_TITLE_FIELD = "userId";

export const AnimalReportTitle = (record: TAnimalReport): string => {
  return record.userId?.toString() || String(record.id);
};
