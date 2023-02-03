
import { IEmployeeRepository } from '@employee/database/implements/IEmployeeRepository';
import { Injectable } from '@nestjs/common';


@Injectable()
export class ListEmployeeService {
  constructor(
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute() {
    const employees = this.employeeRepository.list()
    return employees
  }

}