import { IEmployeeRepository } from "@employee/database/implements/IEmployeeRepository";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'
import { JwtPayload } from "jsonwebtoken";
import { ExtractJwt, Strategy } from "passport-jwt";
import { EmployeeNotExists } from '@employee/errors/EmployeeNotExists';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private employeeRepository: IEmployeeRepository
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET_KEY || 'test',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload: JwtPayload): Promise<any> {
    const { sub } = payload
    const employee = await this.employeeRepository.findById(sub)
    if(!employee) {
      throw new EmployeeNotExists()
    }

    return employee
  }
}