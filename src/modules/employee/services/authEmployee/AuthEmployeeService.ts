
import { IEmployeeRepository } from '@employee/database/implements/IEmployeeRepository';
import { Injectable } from '@nestjs/common';
import { compare } from "bcrypt";
import { AuthEmployeeDTO } from './../../DTOs/AuthEmployeeDTO';
import { EmailOrPassWrong } from '@employee/errors/EmailOrPassWrong';
import { JwtService } from "@nestjs/jwt";

interface IResponse {
  token: string
}

@Injectable()
export class AuthEmployeeService {
  constructor(
    private employeeRepository: IEmployeeRepository,
    private jwt: JwtService
  ) {}

  async execute({email, password}: AuthEmployeeDTO): Promise<IResponse> {

    const employee = await this.employeeRepository.findByEmail(email)
    if(!employee) {
      throw new EmailOrPassWrong()
    }
    console.log(employee)
    const passwordMatch = await compare(password, employee.password)
    if(!passwordMatch) {
      throw new EmailOrPassWrong()
    }

    const token = this.jwt.sign({
      sub: employee.id,
    }, {
      expiresIn: '1h',
      secret: process.env.JWT_SECRET_KEY as string || '8819'
    });

    return {
      token
    }
  }

}