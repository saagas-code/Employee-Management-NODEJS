
import {Module} from "@nestjs/common"
import { IEmployeeRepository } from "./database/implements/IEmployeeRepository";
import { PrismaService } from './../instances/prisma.service';
import { EmployeeRepositoryPrisma } from "./database/prisma/repositories/EmployeeRepositoryPrisma";


@Module({
  providers: [
    PrismaService, 
    {
      provide: IEmployeeRepository,
      useClass: EmployeeRepositoryPrisma
    },
  ],

  exports: [IEmployeeRepository]
})
export class EmployeeDatabaseModule {}