import { Module } from '@nestjs/common';
import { EmployeeDatabaseModule } from '@employee/database.module';
import { RoleDatabaseModule } from './database.module';

import { CreateRoleController } from './services/createRole/CreateRoleController';
import { CreateRoleService } from './services/createRole/CreateRoleService';
import { ListRoleController } from './services/listRole/ListRoleController';
import { ListRoleService } from './services/listRole/ListRoleService';
import { ListPermissionController } from './services/listPermission/ListPermissionController';
import { ListPermissionService } from './services/listPermission/ListPermissionService';


@Module({
  imports: [
    RoleDatabaseModule,
    EmployeeDatabaseModule
  ],
  controllers: [
    CreateRoleController,
    ListRoleController,
    ListPermissionController
  ],
  providers: [
    CreateRoleService,
    ListRoleService,
    ListPermissionService
  ],
  exports: [
    // JwtStrategy, PassportModule
  ]
  
})

export class RoleHttpModule {}
