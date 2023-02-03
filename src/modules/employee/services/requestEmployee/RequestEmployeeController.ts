import { GetEmployee } from "@employee/decorators/employee.decorator"
import { Controller, Get, UseGuards } from "@nestjs/common"
import { RequestEmployeeService } from "./RequestEmployeeService"
import { Employee } from '@employee/entities/Employee';
import { AuthGuard } from '@nestjs/passport';

@Controller("/auth")
@UseGuards(AuthGuard('jwt'))
export class RequestEmployeeController {
  constructor(
    private requestEmployeeUseCase: RequestEmployeeService,
  ) {}
  
  @Get("/session")
  async handle(@GetEmployee() employee: Employee) {
    const response = await this.requestEmployeeUseCase.execute(employee.id)

    return response
  }

}