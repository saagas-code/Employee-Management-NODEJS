
import { IRoleRepository } from '@access/database/implements/IRoleRepository';
import { CreateRoleDTO } from '@access/DTOs/CreateRoleDTO';
import { Role } from '@access/entities/Role';
import { Injectable } from '@nestjs/common';
import { RoleExists } from '../../errors/RoleExists';


@Injectable()
export class CreateRoleService {
  constructor(
    private roleRepository: IRoleRepository
  ) {}

  async execute({name, description}: CreateRoleDTO): Promise<Role> {
    
    const roleExists = await this.roleRepository.findByName(name)
    if(roleExists) {
      throw new RoleExists()
    }

    const role = new Role()
    Object.assign(role, {name, description})

    const newRole = this.roleRepository.create(role)
    
    return newRole
  }

}