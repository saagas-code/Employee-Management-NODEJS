import { IsArray, IsNotEmpty, IsString  } from "class-validator";

export class UpdatePermissionsRoleDTO {
   
  @IsArray()
  @IsNotEmpty()
  permission_id: string[]
}