import { Module } from '@nestjs/common';
import { EmployeeDatabaseModule } from '@employee/database.module';
import { RoleDatabaseModule } from './database.module';

import { CreateRoleController } from './services/createRole/CreateRoleController';
import { CreateRoleService } from './services/createRole/CreateRoleService';
import { ListRoleController } from './services/listRole/ListRoleController';
import { ListRoleService } from './services/listRole/ListRoleService';
import { ListPermissionController } from './services/listPermission/ListPermissionController';
import { ListPermissionService } from './services/listPermission/ListPermissionService';
import { CreatePermissionController } from './services/createPermission/CreatePermissionController';
import { CreatePermissionService } from './services/createPermission/CreatePermissionService';


@Module({
  imports: [
    RoleDatabaseModule,
    EmployeeDatabaseModule
  ],
  controllers: [
    CreateRoleController,
    ListRoleController,
    CreatePermissionController,
    ListPermissionController
  ],
  providers: [
    CreateRoleService,
    ListRoleService,
    CreatePermissionService,
    ListPermissionService
  ],
  exports: [
    // JwtStrategy, PassportModule
  ]
  
})

export class RoleHttpModule {}
