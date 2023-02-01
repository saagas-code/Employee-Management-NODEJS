
import { Employee } from './../../entities/Employee';


export abstract class IEmployeeRepository {
  abstract list(): Promise<Employee[]>;
  abstract create(data: Employee): Promise<Employee>;
  abstract findById(id: string): Promise<Employee>;
  abstract findByEmail(email: string): Promise<Employee>;
}