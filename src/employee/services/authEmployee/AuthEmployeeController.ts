
import { Controller, Post, Body } from "@nestjs/common"
import { AuthEmployeeService } from './AuthEmployeeService';
import { AuthEmployeeDTO } from './../../DTOs/AuthEmployeeDTO';

interface IResponse {
  token: string
}

@Controller("/auth")
export class AuthEmployeeController {
  constructor(
    private authEmployeeService: AuthEmployeeService,
  ) {}
  
  @Post("/login")
  async handle(@Body() body: AuthEmployeeDTO): Promise<IResponse> {
    const permission = await this.authEmployeeService.execute(body)
    return permission
  }

}