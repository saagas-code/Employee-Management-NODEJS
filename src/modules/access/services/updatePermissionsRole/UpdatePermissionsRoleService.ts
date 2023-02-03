
import { IPermissionRepository } from '@access/database/implements/IPermissionRepository';
import { IRoleRepository } from '@access/database/implements/IRoleRepository';
import { PermissionsRole } from '@access/entities/PermissionsRole';
import { Role } from '@access/entities/Role';
import { RoleNotExists } from '@access/errors/RoleNotExists';
import { Injectable } from '@nestjs/common';
import { UpdatePermissionsRoleDTO } from './../../DTOs/UpdatePermissionsRoleDTO';

interface params {
  role_id: string
}

@Injectable()
export class UpdatePermissionsRoleService {
  constructor(
    private roleRepository: IRoleRepository
  ) {}

  async execute({permissions_id}: UpdatePermissionsRoleDTO, {role_id}: params): Promise<null> {
    
    const roleExists = await this.roleRepository.findById(role_id)
    if(!roleExists) {
      throw new RoleNotExists()
    }

    await this.roleRepository.deletePermissionsToRoleThatNotIn(permissions_id)

    const newData = permissions_id.map((permission_id) => {
      const PermissionRole = new PermissionsRole()
      Object.assign(PermissionRole, {permission_id, role_id})
      return PermissionRole
    })

    return this.roleRepository.updatePermissionsToRole(newData)

  }

}