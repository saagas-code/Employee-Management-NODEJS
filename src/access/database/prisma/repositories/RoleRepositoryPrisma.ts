import { IRoleRepository } from "@access/database/implements/IRoleRepository";
import { Role } from "@access/entities/Role";
import { Injectable } from "@nestjs/common";
import { RoleMapperPrisma } from "../mappers/RoleMapperPrisma";
import { PrismaService } from './../../../../instances/prisma.service';



@Injectable()
export class RoleRepositoryPrisma implements IRoleRepository {
  constructor(
    private prisma: PrismaService
  ) {}
  
  
  async create(role: Role): Promise<Role> {
    const raw = RoleMapperPrisma.toPrisma(role)
    const newRole = this.prisma.role.create({
      data: raw
    })
    return newRole
  }

  async list(): Promise<Role[]> {
    const role = this.prisma.role.findMany()
    return role
  }

  async findByName(name: string): Promise<Role> {
    const role = this.prisma.role.findUnique({
      where: {
        name
      }
    })
    return role
  }
  
}