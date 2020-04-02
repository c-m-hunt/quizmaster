export type Role = 'admin' | 'questionmaster' | `player`;

export interface User {
  email: string;
  role: Role;
}

export interface Quiz {
  name: string;
  rounds?: string[];
  teams?: string[];
  joker?: boolean;
}

export interface Team {
  name: string;
  captainEmail: string;
  accessCode: string;
}