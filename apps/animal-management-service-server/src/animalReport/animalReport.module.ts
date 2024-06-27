import { Module } from "@nestjs/common";
import { AnimalReportModuleBase } from "./base/animalReport.module.base";
import { AnimalReportService } from "./animalReport.service";
import { AnimalReportController } from "./animalReport.controller";
import { AnimalReportResolver } from "./animalReport.resolver";

@Module({
  imports: [AnimalReportModuleBase],
  controllers: [AnimalReportController],
  providers: [AnimalReportService, AnimalReportResolver],
  exports: [AnimalReportService],
})
export class AnimalReportModule {}
