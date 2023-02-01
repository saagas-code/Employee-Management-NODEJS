import { randomUUID } from 'crypto';
import { Role } from './Role';
import { Permission } from './Permission';

export class Employee {
  id?: string;
  name: string
  email: string
  password: string
  gender: string
  created_at?: Date
  roles?: Role[]
  permissions?: Permission[]
  
  constructor() {
    if(!this.id) {
      this.id = randomUUID()
    }
    if(!this.created_at) {
      this.created_at = new Date()
    }
  }
}

