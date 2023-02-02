import { IsEmail, IsEnum, IsNotEmpty, IsString  } from "class-validator";

export class AuthEmployeeDTO {

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}