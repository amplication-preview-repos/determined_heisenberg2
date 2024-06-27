import * as graphql from "@nestjs/graphql";
import { AnimalReportResolverBase } from "./base/animalReport.resolver.base";
import { AnimalReport } from "./base/AnimalReport";
import { AnimalReportService } from "./animalReport.service";

@graphql.Resolver(() => AnimalReport)
export class AnimalReportResolver extends AnimalReportResolverBase {
  constructor(protected readonly service: AnimalReportService) {
    super(service);
  }
}
