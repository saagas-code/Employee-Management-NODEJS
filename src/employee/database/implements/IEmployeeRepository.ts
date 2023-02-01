
import { Employee } from './../../entities/Employee';


export abstract class IEmployeeRepository {
  abstract list(): Promise<Employee[]>;
}