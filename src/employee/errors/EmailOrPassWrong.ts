
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class EmailOrPassWrong extends HttpException {
  constructor() {
    super ({role: "Email e/ou senha inválido.", statusCode: 409}, HttpStatus.CONFLICT)
  }
}