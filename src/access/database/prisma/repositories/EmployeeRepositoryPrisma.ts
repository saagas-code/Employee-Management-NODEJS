import { IRoleRepository } from "@access/database/implements/IRoleRepository";
import { Role } from "@access/entities/Role";
import { Injectable } from "@nestjs/common";
import { PrismaService } from './../../../../instances/prisma.service';




@Injectable()
export class RoleRepositoryPrisma implements IRoleRepository {
  constructor(
    private prisma: PrismaService
  ) {}
  
  async list(): Promise<Role[]> {
    const role = this.prisma.role.findMany()
    return role
  }
  
}