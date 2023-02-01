import { Controller, Get } from "@nestjs/common"
import { ListEmployeeService } from "./ListEmployeeService"


@Controller("/")
export class ListEmployeeController {
  constructor(
    private listEmployeeUseCase: ListEmployeeService,
  ) {}
  
  @Get("/")
  async create() {
    const employee = await this.listEmployeeUseCase.execute()

    return employee
  }

}