
import { Injectable } from '@nestjs/common';
import { IEmployeeRepository } from 'src/employee/database/implements/IEmployeeRepository';


@Injectable()
export class ListEmployeeUseCase {
  constructor(
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute() {
    return 'Hello Worldd'
  }

}