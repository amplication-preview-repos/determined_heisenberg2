import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnimalReportServiceBase } from "./base/animalReport.service.base";

@Injectable()
export class AnimalReportService extends AnimalReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
