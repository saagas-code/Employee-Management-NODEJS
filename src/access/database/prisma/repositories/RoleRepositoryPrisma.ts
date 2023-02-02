import { IRoleRepository } from "@access/database/implements/IRoleRepository";
import { Permission } from "@access/entities/Permission";
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

  async updatePermissionsToRole(permission_id: string[], role_id: string): Promise<Role> {
    const data = permission_id.map((permission_id) => {
      return {
        permission_id,
        role_id
      }
    })
    console.log(data)
    return 'TESTEEE' as any
    
    const updatedRole = this.prisma.permission_Role.create
    return
  }
  
}