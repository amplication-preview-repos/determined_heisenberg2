import { AnimalReportWhereInput } from "./AnimalReportWhereInput";
import { AnimalReportOrderByInput } from "./AnimalReportOrderByInput";

export type AnimalReportFindManyArgs = {
  where?: AnimalReportWhereInput;
  orderBy?: Array<AnimalReportOrderByInput>;
  skip?: number;
  take?: number;
};
