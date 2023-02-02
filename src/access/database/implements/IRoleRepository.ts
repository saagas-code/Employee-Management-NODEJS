import { CreateRoleDTO } from "@access/DTOs/CreateRoleDTO";
import { Role } from "@access/entities/Role";





export abstract class IRoleRepository {
  abstract list(): Promise<Role[]>;
  abstract create(role: Role): Promise<Role>;
  abstract findByName(txt: string): Promise<Role>
  abstract findById(id: string): Promise<Role>
  abstract updatePermissionsToRole(permission_id: string[], role_id: string): Promise<Role>
}