import { Injectable } from "@nestjs/common";
import { IEmployeeRepository } from "../../implements/IEmployeeRepository";
import { PrismaService } from './../../../../instances/prisma.service';
import { Employee } from '@employee/entities/Employee';
import { EmployeeMapperPrisma } from "../mappers/EmployeeMapperPrisma";



@Injectable()
export class EmployeeRepositoryPrisma implements IEmployeeRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(data: Employee): Promise<Employee> {
    const raw = EmployeeMapperPrisma.toPrisma(data)

    const employee = this.prisma.employee.create({
      data: raw
    })
    return employee
  }
  
  async list(): Promise<Employee[]> {
    const employee = this.prisma.employee.findMany({
      include: {
        role: true
      }
    })
    return employee
  }

  async findById(id: string): Promise<Employee> {
    const employee = this.prisma.employee.findUnique({
      where: {
        id
      }
    })
    return employee
  }

  async findByEmail(email: string): Promise<Employee> {
    const employee = this.prisma.employee.findUnique({
      where: {
        email
      }
    })
    return employee
  }
  
}