
import { IEmployeeRepository } from '@employee/database/implements/IEmployeeRepository';
import { CreateEmployeeDTO } from '@employee/DTOs/CreateEmployeeDTO';
import { Injectable } from '@nestjs/common';
import { Employee } from '@employee/entities/Employee';

import { hash } from "bcrypt";
import { EmployeeExists } from '@employee/errors/EmployeeExists';

@Injectable()
export class CreateEmployeeService {
  constructor(
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute({name, email, password, gender, role_id}: CreateEmployeeDTO): Promise<Employee> {
    
    const employeeExists = await this.employeeRepository.findByEmail(email)
    if(employeeExists) {
      throw new EmployeeExists()
    }

    const passwordHash = await hash(password, 10)

    const employee = new Employee()
    Object.assign(employee, {name, email, password: passwordHash, gender, role_id})
    const newRole = this.employeeRepository.create(employee)
    
    return newRole
  }

}