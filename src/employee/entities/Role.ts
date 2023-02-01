import { randomUUID } from "crypto"


export class Role {
  id?: string                 
  name: string              
  description: string      
  created_at?: Date

  constructor() {
    if(!this.id) {
      this.id = randomUUID()
    }
    if(!this.created_at) {
      this.created_at = new Date()
    }
  }

}