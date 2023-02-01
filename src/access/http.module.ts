import { EmployeeDatabaseModule } from '@employee/database.module';
import { Module } from '@nestjs/common';
import { RoleDatabaseModule } from './database.module';
import { CreateRoleController } from './services/listEmployee/CreateRoleController';
import { CreateRoleService } from './services/listEmployee/CreateRoleService';

@Module({
  imports: [
    RoleDatabaseModule,
    EmployeeDatabaseModule
  ],
  controllers: [
    CreateRoleController, 
  ],
  providers: [
    CreateRoleService,
  ],
  exports: [
    // JwtStrategy, PassportModule
  ]
  
})

export class RoleHttpModule {}
