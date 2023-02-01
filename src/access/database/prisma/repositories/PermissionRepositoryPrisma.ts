import { Injectable } from "@nestjs/common";
import { PrismaService } from "instances/prisma.service";
import { IRoleRepository } from "@access/database/implements/IRoleRepository";
import { RoleMapperPrisma } from "../mappers/RoleMapperPrisma";
import { Permission } from "@access/entities/Permission";




@Injectable()
export class PermissionRepositoryPrisma implements IRoleRepository {
  constructor(
    private prisma: PrismaService
  ) {}
  
  
  async create(role: Permission): Promise<Permission> {
    const raw = RoleMapperPrisma.toPrisma(role)
    const newRole = this.prisma.permission.create({
      data: raw
    })
    return newRole
  }

  async list(): Promise<Permission[]> {
    const role = this.prisma.permission.findMany()
    return role
  }

  async findByName(name: string): Promise<Permission> {
    const role = this.prisma.permission.findUnique({
      where: {
        name
      }
    })
    return role
  }
  
}