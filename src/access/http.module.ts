import { Module } from '@nestjs/common';
import { EmployeeDatabaseModule } from '@employee/database.module';
import { RoleDatabaseModule } from './database.module';

import { CreateRoleController } from './services/createRole/CreateRoleController';
import { CreateRoleService } from './services/createRole/CreateRoleService';
import { ListRoleController } from './services/listRole/ListRoleController';
import { ListRoleService } from './services/listRole/ListRoleService';


@Module({
  imports: [
    RoleDatabaseModule,
    EmployeeDatabaseModule
  ],
  controllers: [
    CreateRoleController,
    ListRoleController,
  ],
  providers: [
    CreateRoleService,
    ListRoleService
  ],
  exports: [
    // JwtStrategy, PassportModule
  ]
  
})

export class RoleHttpModule {}
