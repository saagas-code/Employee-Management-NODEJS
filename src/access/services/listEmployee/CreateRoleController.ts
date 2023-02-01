import { Controller, Get } from "@nestjs/common"
import { CreateRoleService } from "./CreateRoleService"


@Controller("/role")
export class CreateRoleController {
  constructor(
    private createRoleService: CreateRoleService,
  ) {}
  
  @Get("/")
  async create() {
    const employee = await this.createRoleService.execute()

    return employee
  }

}