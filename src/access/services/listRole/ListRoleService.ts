
import { IRoleRepository } from '@access/database/implements/IRoleRepository';
import { CreateRoleDTO } from '@access/DTOs/CreateRoleDTO';
import { Role } from '@access/entities/Role';
import { Injectable } from '@nestjs/common';
import { RoleExists } from '../../errors/RoleExists';


@Injectable()
export class ListRoleService {
  constructor(
    private roleRepository: IRoleRepository
  ) {}

  async execute(): Promise<Role[]> {
    
    const roles = await this.roleRepository.list()
    
    return roles
  }

}