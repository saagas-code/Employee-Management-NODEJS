import { EmployeeViewModel } from "@employee/viewsModels/ListUserView"
import { Controller, Get } from "@nestjs/common"
import { ListEmployeeService } from "./ListEmployeeService"


@Controller("/employees")
export class ListEmployeeController {
  constructor(
    private listEmployeeUseCase: ListEmployeeService,
  ) {}
  
  @Get("/")
  async handle() {
    const employee = await this.listEmployeeUseCase.execute()

    const viewEmployees = employee.map(EmployeeViewModel.toHTTP)

    return viewEmployees
  }

}