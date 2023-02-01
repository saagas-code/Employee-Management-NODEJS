require('module-alias/register')
import { Module } from '@nestjs/common';
import { EmployeeHttpModule } from '@employee/http.module'
import { EmployeeDatabaseModule } from '@employee/database.module';
import { ConfigModule } from '@nestjs/config'
import { RoleDatabaseModule } from '@access/database.module';
import { RoleHttpModule } from '@access/http.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmployeeDatabaseModule,
    EmployeeHttpModule,

    RoleDatabaseModule,
    RoleHttpModule
  ]
})
export class AppModule {}
