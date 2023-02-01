
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class RoleExists extends HttpException {
  constructor() {
    super ({role: "Role já existente.", statusCode: 409}, HttpStatus.CONFLICT)
  }
}