
import { IPermissionRepository } from '@access/database/implements/IPermissionRepository';
import { Permission } from '@access/entities/Permission';
import { Injectable } from '@nestjs/common';



@Injectable()
export class ListPermissionService {
  constructor(
    private permissionRepository: IPermissionRepository
  ) {}

  async execute(): Promise<Permission[]> {
    
    const roles = await this.permissionRepository.list()
    
    return roles
  }

}