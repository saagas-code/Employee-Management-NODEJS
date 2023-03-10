import { Permission } from '@access/entities/Permission';
import { Role } from '@access/entities/Role';
import { randomUUID } from 'crypto';


export class Employee {
  id?: string;
  name: string
  email: string
  password: string
  gender: string
  created_at?: Date
  updated_at?: Date | null
  role_id: string
  role?: Role
  
  constructor() {
    if(!this.id) {
      this.id = randomUUID()
    }
    if(!this.created_at) {
      this.created_at = new Date()
    }
  }
}

