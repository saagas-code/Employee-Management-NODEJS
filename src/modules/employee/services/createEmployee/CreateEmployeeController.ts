
import { Controller, Post, Body } from "@nestjs/common"
import { CreateEmployeeService } from "./CreateEmployeeService"
import { CreateEmployeeDTO } from '@employee/DTOs/CreateEmployeeDTO';




@Controller("/employees")
export class CreateEmployeeController {
  constructor(
    private createEmployeeService: CreateEmployeeService,
  ) {}
  
  @Post("/")
  async handle(@Body() body: CreateEmployeeDTO) {
    const permission = await this.createEmployeeService.execute(body)
    return permission
  }

}