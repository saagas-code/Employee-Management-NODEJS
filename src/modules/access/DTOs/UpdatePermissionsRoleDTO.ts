import { IsArray, IsNotEmpty, IsString  } from "class-validator";

export class UpdatePermissionsRoleDTO {
   
  @IsArray()
  @IsNotEmpty()
  permissions_id: string[]
}