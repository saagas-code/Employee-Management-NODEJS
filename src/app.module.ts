import { Module } from '@nestjs/common';
import { EmployeeDatabaseModule } from './employee/database.module';
import { EmployeeHttpModule } from './employee/http.module';

@Module({
  imports: [
    EmployeeDatabaseModule,
    EmployeeHttpModule
  ]
})
export class AppModule {}
