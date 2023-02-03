import { CreateRoleDTO } from "@access/DTOs/CreateRoleDTO"
import { Controller, Get, Body } from "@nestjs/common"
import { ListRoleService } from "./ListRoleService"



@Controller("/roles")
export class ListRoleController {
  constructor(
    private listRoleService: ListRoleService,
  ) {}
  
  @Get("/")
  async handle() {
    const role = await this.listRoleService.execute()
    return role
  }

}