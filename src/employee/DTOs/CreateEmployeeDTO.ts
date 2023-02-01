import { IsEmail, IsEnum, IsString  } from "class-validator";

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
  description: string;

  @IsString()
  @IsEnum(GenderEnum)
  gender: string
}