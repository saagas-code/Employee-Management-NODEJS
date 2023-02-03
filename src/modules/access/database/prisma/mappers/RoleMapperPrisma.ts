import { Role } from "@access/entities/Role";

export class RoleMapperPrisma {
  static toPrisma(role: Role) {
    return {
      id: role.id,
      name: role.name,
      description: role.description,
      created_at: role.created_at,
    }
  }

}