import { Permission } from "@access/entities/Permission";


export abstract class IPermissionRepository {
  abstract list(): Promise<Permission[]>;
  abstract create(role: Permission): Promise<Permission>;
  abstract findByName(txt: string): Promise<Permission>
}