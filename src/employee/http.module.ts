import { Module } from '@nestjs/common';
import { EmployeeDatabaseModule } from './database.module';
import { ListEmployeeController } from './useCases/listEmployee/ListEmployeeController';
import { ListEmployeeUseCase } from './useCases/listEmployee/ListEmployeeUseCase';

@Module({
  imports: [
    EmployeeDatabaseModule
  ],
  controllers: [
    ListEmployeeController, 
  ],
  providers: [
    ListEmployeeUseCase,
  ],
  exports: [
    // JwtStrategy, PassportModule
  ]
  
})

export class EmployeeHttpModule {}
