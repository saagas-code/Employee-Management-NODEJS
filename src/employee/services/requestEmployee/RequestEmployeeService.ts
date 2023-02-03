
import { IEmployeeRepository } from '@employee/database/implements/IEmployeeRepository';
import { Injectable } from '@nestjs/common';


@Injectable()
export class RequestEmployeeService {
  constructor(
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(id: string) {
    const employees = this.employeeRepository.findById(id)
    return employees
  }

}