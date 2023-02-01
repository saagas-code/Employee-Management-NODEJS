import { Module } from '@nestjs/common';
import { EmployeeDatabaseModule } from './database.module';
import { ListEmployeeController } from './services/listEmployee/ListEmployeeController';
import { ListEmployeeService } from './services/listEmployee/ListEmployeeService';
import { CreateEmployeeController } from './services/createEmployee/CreateEmployeeController';
import { CreateEmployeeService } from './services/createEmployee/CreateEmployeeService';

@Module({
  imports: [
    EmployeeDatabaseModule
  ],
  controllers: [
    ListEmployeeController,
    CreateEmployeeController
  ],
  providers: [
    ListEmployeeService,
    CreateEmployeeService
  ],
  exports: [
    // JwtStrategy, PassportModule
  ]
  
})

export class EmployeeHttpModule {}
