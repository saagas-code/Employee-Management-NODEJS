import { IsEmail, IsEnum, IsNotEmpty, IsString  } from "class-validator";

enum GenderEnum {
  MAN = 'MAN',
  FEMALE = 'FEMALE'
}

export class CreateEmployeeDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsEnum(GenderEnum)
  gender: string

  @IsString()
  @IsNotEmpty()
  role_id: string
}