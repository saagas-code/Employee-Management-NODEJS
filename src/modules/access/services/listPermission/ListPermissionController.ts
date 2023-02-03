import { Controller, Get, Body } from "@nestjs/common"
import { ListPermissionService } from "./ListPermissionService"




@Controller("/permissions")
export class ListPermissionController {
  constructor(
    private listPermissionService: ListPermissionService,
  ) {}
  
  @Get("/")
  async handle() {
    const role = await this.listPermissionService.execute()
    return role
  }

}