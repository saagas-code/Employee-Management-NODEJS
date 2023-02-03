
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class EmployeeNotExists extends HttpException {
  constructor() {
    super ({role: "Employee não existe.", statusCode: 409}, HttpStatus.CONFLICT)
  }
}