
import { IPermissionRepository } from '@access/database/implements/IPermissionRepository';
import { IRoleRepository } from '@access/database/implements/IRoleRepository';
import { Role } from '@access/entities/Role';
import { RoleNotExists } from '@access/errors/RoleNotExists';
import { Injectable } from '@nestjs/common';
import { UpdatePermissionsRoleDTO } from './../../DTOs/UpdatePermissionsRoleDTO';


@Injectable()
export class UpdatePermissionsRoleService {
  constructor(
    private permissionRepository: IPermissionRepository,
    private roleRepository: IRoleRepository
  ) {}

  async execute({permission_id , role_id}: UpdatePermissionsRoleDTO): Promise<Role> {
    
    const roleExists = await this.roleRepository.findById(role_id)
    if(!roleExists) {
      throw new RoleNotExists()
    }

    const test = this.roleRepository.updatePermissionsToRole(permission_id, role_id)
    
    return {} as any
  }

}