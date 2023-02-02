import { IsNotEmpty, IsString  } from "class-validator";

export class CreateRoleDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  description: string;
}