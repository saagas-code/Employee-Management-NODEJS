
import { Controller, Post, Body } from "@nestjs/common"
import { AuthEmployeeService } from './AuthEmployeeService';
import { AuthEmployeeDTO } from './../../DTOs/AuthEmployeeDTO';

@Controller("/login")
export class AuthEmployeeController {
  constructor(
    private authEmployeeService: AuthEmployeeService,
  ) {}
  
  @Post("/")
  async handle(@Body() body: AuthEmployeeDTO) {
    const permission = await this.authEmployeeService.execute(body)
    return permission
  }

}