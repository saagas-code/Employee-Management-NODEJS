import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'common/strategy/jwt.strategy';

import { EmployeeDatabaseModule } from './database.module';
import { ListEmployeeController } from './services/listEmployee/ListEmployeeController';
import { ListEmployeeService } from './services/listEmployee/ListEmployeeService';
import { CreateEmployeeController } from './services/createEmployee/CreateEmployeeController';
import { CreateEmployeeService } from './services/createEmployee/CreateEmployeeService';
import { AuthEmployeeController } from './services/authEmployee/AuthEmployeeController';
import { AuthEmployeeService } from './services/authEmployee/AuthEmployeeService';
import { RequestEmployeeService } from './services/requestEmployee/RequestEmployeeService';
import { RequestEmployeeController } from './services/requestEmployee/RequestEmployeeController';


@Module({
  imports: [
    EmployeeDatabaseModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY || '8819',
      signOptions: {
        expiresIn: 3600
      }
    })
  ],
  controllers: [
    ListEmployeeController,
    CreateEmployeeController,
    AuthEmployeeController,
    RequestEmployeeController
  ],
  providers: [
    ListEmployeeService,
    CreateEmployeeService,
    AuthEmployeeService,
    RequestEmployeeService,
    JwtStrategy
  ],
  exports: [
    JwtStrategy, PassportModule
  ]
  
})

export class EmployeeHttpModule {}
