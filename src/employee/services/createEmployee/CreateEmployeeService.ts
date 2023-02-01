
import { IEmployeeRepository } from '@employee/database/implements/IEmployeeRepository';
import { CreateEmployeeDTO } from '@employee/DTOs/CreateEmployeeDTO';
import { Injectable } from '@nestjs/common';
import { Employee } from '@employee/entities/Employee';
import { EmployeeExists } from '@employee/errors/PermissionExists';


@Injectable()
export class CreateEmployeeService {
  constructor(
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute({name, email, password, gender}: CreateEmployeeDTO): Promise<Employee> {
    
    const employeeExists = await this.employeeRepository.findByEmail(email)
    if(employeeExists) {
      throw new EmployeeExists()
    }

    const employee = new Employee()
    Object.assign(employee, {name, email, password, gender})
    console.log('employeee', employee)
    // return {} as any
    const newRole = this.employeeRepository.create(employee)
    
    return newRole
  }

}