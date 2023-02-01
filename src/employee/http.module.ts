import { Module } from '@nestjs/common';
import { EmployeeDatabaseModule } from './database.module';
import { ListEmployeeController } from './services/listEmployee/ListEmployeeController';
import { ListEmployeeService } from './services/listEmployee/ListEmployeeService';

@Module({
  imports: [
    EmployeeDatabaseModule
  ],
  controllers: [
    ListEmployeeController, 
  ],
  providers: [
    ListEmployeeService,
  ],
  exports: [
    // JwtStrategy, PassportModule
  ]
  
})

export class EmployeeHttpModule {}
