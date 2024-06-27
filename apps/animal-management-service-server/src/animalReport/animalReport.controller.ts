import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnimalReportService } from "./animalReport.service";
import { AnimalReportControllerBase } from "./base/animalReport.controller.base";

@swagger.ApiTags("animalReports")
@common.Controller("animalReports")
export class AnimalReportController extends AnimalReportControllerBase {
  constructor(protected readonly service: AnimalReportService) {
    super(service);
  }
}
