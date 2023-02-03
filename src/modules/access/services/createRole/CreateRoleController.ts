import { CreateRoleDTO } from "@access/DTOs/CreateRoleDTO"
import { Controller, Post, Body } from "@nestjs/common"
import { CreateRoleService } from "./CreateRoleService"


@Controller("/roles")
export class CreateRoleController {
  constructor(
    private createRoleService: CreateRoleService,
  ) {}
  
  @Post("/")
  async handle(@Body() body: CreateRoleDTO) {
    const role = await this.createRoleService.execute(body)
    return role
  }

}