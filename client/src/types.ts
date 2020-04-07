export type Role = 'admin' | 'questionmaster' | `player`;

export interface DBObj {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  email: string;
  role: Role;
}

export interface Quiz {
  name: string;
  date: Date;
  rounds?: string[];
  teams?: [{
    id: string;
    accessCode: string;
  }];
  joker?: boolean;
}

export interface Team {
  name: string;
  captainEmail: string;
  captainName: string;
  accessCode: string;
}

export interface QuizEntry {
  quizId: string;
  teamId: string;
  team?: Team;
}