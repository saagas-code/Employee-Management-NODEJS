import { Controller, Get } from "@nestjs/common"
import { ListEmployeeUseCase } from "./ListEmployeeUseCase"


@Controller("/")
export class ListEmployeeController {
  constructor(
    private listEmployeeUseCase: ListEmployeeUseCase,
  ) {}
  
  @Get("/")
  async create() {
    const employee = await this.listEmployeeUseCase.execute()

    return employee
  }

}