
import { CreatePermissionDTO } from "@access/DTOs/CreatePermissionDTO"
import { Controller, Post, Body } from "@nestjs/common"
import { CreatePermissionService } from "./CreatePermissionService"



@Controller("/permissions")
export class CreatePermissionController {
  constructor(
    private createPermissionService: CreatePermissionService,
  ) {}
  
  @Post("/")
  async handle(@Body() body: CreatePermissionDTO) {
    const permission = await this.createPermissionService.execute(body)
    return permission
  }

}