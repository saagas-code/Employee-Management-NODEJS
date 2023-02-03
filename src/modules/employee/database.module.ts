
import {Module} from "@nestjs/common"
import { IEmployeeRepository } from "./database/implements/IEmployeeRepository";
import { EmployeeRepositoryPrisma } from "./database/prisma/repositories/EmployeeRepositoryPrisma";
import { PrismaService } from '@instances/prisma.service';


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