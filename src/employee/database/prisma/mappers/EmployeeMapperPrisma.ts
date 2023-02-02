import { Employee } from "@employee/entities/Employee";

export class EmployeeMapperPrisma {
  static toPrisma(employee: Employee) {
    return {
      id: employee.id,
      name: employee.name,
      email: employee.email,
      password: employee.password,
      gender: employee.gender,
      created_at: employee.created_at,
      role_id: employee.role_id
    }
  }

}