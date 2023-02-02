import { UpdatePermissionsRoleDTO } from "@access/DTOs/UpdatePermissionsRoleDTO"
import { Controller, Patch, Body } from "@nestjs/common"
import { UpdatePermissionsRoleService } from "./UpdatePermissionsRoleService"





@Controller("/roles/permissions")
export class UpdatePermissionsRoleController {
  constructor(
    private updatePermissionsRoleService: UpdatePermissionsRoleService,
  ) {}
  
  @Patch("/")
  async handle(@Body() body: UpdatePermissionsRoleDTO) {
    const permission = await this.updatePermissionsRoleService.execute(body)
    return permission
  }

}