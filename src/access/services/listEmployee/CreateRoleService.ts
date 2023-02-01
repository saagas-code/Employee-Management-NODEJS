
import { IEmployeeRepository } from '@employee/database/implements/IEmployeeRepository';
import { Injectable } from '@nestjs/common';


@Injectable()
export class CreateRoleService {
  constructor(
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute() {
    return 'Hello Worldd'
  }

}