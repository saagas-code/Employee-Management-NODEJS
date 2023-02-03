
import {Module} from "@nestjs/common"
import { PrismaService } from '@instances/prisma.service';
import { IRoleRepository } from "./database/implements/IRoleRepository";
import { RoleRepositoryPrisma } from "./database/prisma/repositories/RoleRepositoryPrisma";
import { IPermissionRepository } from "./database/implements/IPermissionRepository";
import { PermissionRepositoryPrisma } from './database/prisma/repositories/PermissionRepositoryPrisma';


@Module({
  providers: [
    PrismaService, 
    {
      provide: IRoleRepository,
      useClass: RoleRepositoryPrisma
    },
    {
      provide: IPermissionRepository,
      useClass: PermissionRepositoryPrisma
    },
  ],

  exports: [IRoleRepository, IPermissionRepository]
})
export class RoleDatabaseModule {}