
import {Module} from "@nestjs/common"
import { PrismaService } from './../instances/prisma.service';
import { IRoleRepository } from "./database/implements/IRoleRepository";
import { RoleRepositoryPrisma } from "./database/prisma/repositories/EmployeeRepositoryPrisma";


@Module({
  providers: [
    PrismaService, 
    {
      provide: IRoleRepository,
      useClass: RoleRepositoryPrisma
    },
  ],

  exports: [IRoleRepository]
})
export class RoleDatabaseModule {}