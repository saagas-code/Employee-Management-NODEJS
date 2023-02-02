
import { IPermissionRepository } from '@access/database/implements/IPermissionRepository';
import { IRoleRepository } from '@access/database/implements/IRoleRepository';
import { PermissionsRole } from '@access/entities/PermissionsRole';
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

  async execute({permission_id , role_id}: UpdatePermissionsRoleDTO): Promise<null> {
    
    const roleExists = await this.roleRepository.findById(role_id)
    if(!roleExists) {
      throw new RoleNotExists()
    }

    const newData = permission_id.map((permission_id) => {
      const PermissionRole = new PermissionsRole()
      Object.assign(PermissionRole, {permission_id, role_id})
      return PermissionRole
    })

    const updatedPermissionsRole = this.roleRepository.updatePermissionsToRole(newData)
    return
  }

}