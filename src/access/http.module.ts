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
import { UpdatePermissionsRoleController } from './services/updatePermissionsRole/UpdatePermissionsRoleController';
import { UpdatePermissionsRoleService } from './services/updatePermissionsRole/UpdatePermissionsRoleService';


@Module({
  imports: [
    RoleDatabaseModule,
    EmployeeDatabaseModule
  ],
  controllers: [
    CreateRoleController,
    ListRoleController,
    CreatePermissionController,
    ListPermissionController,
    UpdatePermissionsRoleController,
  ],
  providers: [
    CreateRoleService,
    ListRoleService,
    CreatePermissionService,
    ListPermissionService,
    UpdatePermissionsRoleService
  ],
  exports: [
    // JwtStrategy, PassportModule
  ]
  
})

export class RoleHttpModule {}
