import { Role } from "@access/entities/Role";




export abstract class IRoleRepository {
  abstract list(): Promise<Role[]>;
}