export interface Quiz {
  name: string;
  code: string;
  rounds?: string[];
  teams?: string[];
  joker?: boolean
}

export interface User {
  email: string;
  role: string;
}