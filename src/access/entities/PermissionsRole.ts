

import { randomUUID } from "crypto"


export class PermissionsRole {
  id: string                 
  role_id: string              
  permission_id: string

  constructor() {
    this.id = randomUUID()
  }

}