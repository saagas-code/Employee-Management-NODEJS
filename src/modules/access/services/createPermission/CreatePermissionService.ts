
import { IPermissionRepository } from '@access/database/implements/IPermissionRepository';
import { CreateRoleDTO } from '@access/DTOs/CreateRoleDTO';
import { Role } from '@access/entities/Role';
import { PermissionExists } from '@access/errors/PermissionExists';
import { Injectable } from '@nestjs/common';


@Injectable()
export class CreatePermissionService {
  constructor(
    private permissionRepository: IPermissionRepository
  ) {}

  async execute({name, description}: CreateRoleDTO): Promise<Role> {
    
    const roleExists = await this.permissionRepository.findByName(name)
    if(roleExists) {
      throw new PermissionExists()
    }

    const role = new Role()
    Object.assign(role, {name, description})

    const newRole = this.permissionRepository.create(role)
    
    return newRole
  }

}