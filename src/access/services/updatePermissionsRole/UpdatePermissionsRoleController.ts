import { UpdatePermissionsRoleDTO } from "@access/DTOs/UpdatePermissionsRoleDTO"
import { Controller, Patch, Body, Param } from "@nestjs/common"
import { UpdatePermissionsRoleService } from "./UpdatePermissionsRoleService"





@Controller("/roles/:role/permissions")
export class UpdatePermissionsRoleController {
  constructor(
    private updatePermissionsRoleService: UpdatePermissionsRoleService,
  ) {}
  
  @Patch("/")
  async handle(@Body() body: UpdatePermissionsRoleDTO, @Param("role") role_id: string) {
    const permission = await this.updatePermissionsRoleService.execute(body, {role_id})
    return permission
  }

}