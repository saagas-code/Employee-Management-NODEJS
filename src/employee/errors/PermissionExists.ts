
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class EmployeeExists extends HttpException {
  constructor() {
    super ({role: "Employee já existente.", statusCode: 409}, HttpStatus.CONFLICT)
  }
}