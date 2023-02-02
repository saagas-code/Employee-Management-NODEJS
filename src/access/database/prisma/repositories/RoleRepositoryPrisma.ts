import { IRoleRepository } from "@access/database/implements/IRoleRepository";
import { Role } from "@access/entities/Role";
import { Injectable } from "@nestjs/common";
import { RoleMapperPrisma } from "../mappers/RoleMapperPrisma";
import { PrismaService } from './../../../../instances/prisma.service';
import { randomUUID } from 'crypto';
import { PermissionsRole } from "@access/entities/PermissionsRole";



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
    const role = this.prisma.role.findMany({
      include: {
        Permission_Role: true
      }
    })
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

  async findById(id: string): Promise<Role> {
    const role = this.prisma.role.findUnique({
      where: {
        id
      }
    })
    return role
  }

  async updatePermissionsToRole(data: PermissionsRole[]): Promise<null> {
    const updatedRole = this.prisma.permission_Role.createMany({
      data: data
    })
    return updatedRole as any
  }
  
}