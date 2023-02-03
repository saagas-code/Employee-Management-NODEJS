
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class RoleNotExists extends HttpException {
  constructor() {
    super ({role: "Role não existe.", statusCode: 409}, HttpStatus.CONFLICT)
  }
}