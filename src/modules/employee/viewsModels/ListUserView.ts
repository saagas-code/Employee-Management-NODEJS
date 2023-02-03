
import { Employee } from '@employee/entities/Employee';





export class EmployeeViewModel {
  static toHTTP(employee: Employee) {
    return {
      id: employee.id,
      name: employee.name,
      email: employee.email,
      gender: employee.gender,
      role: {
        id: employee.role.id,
        name: employee.role.name
      },
      updated_at: employee.updated_at,
      created_at: employee.created_at,
    }
  }
}