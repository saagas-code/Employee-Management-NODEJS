
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class PermissionExists extends HttpException {
  constructor() {
    super ({role: "Permission já existente.", statusCode: 409}, HttpStatus.CONFLICT)
  }
}