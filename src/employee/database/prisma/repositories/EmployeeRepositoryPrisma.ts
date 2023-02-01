import { Injectable } from "@nestjs/common";
import { IEmployeeRepository } from "../../implements/IEmployeeRepository";
import { PrismaService } from './../../../../instances/prisma.service';
import { Employee } from './../../../entities/Employee';



@Injectable()
export class EmployeeRepositoryPrisma implements IEmployeeRepository {
  constructor(
    private prisma: PrismaService
  ) {}
  
  async list(): Promise<Employee[]> {
    const employee = this.prisma.employee.findMany()
    return employee
  }
  
}