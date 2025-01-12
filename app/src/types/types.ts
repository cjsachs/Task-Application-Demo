export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface AuthUser {
  id: string;
  email: string;
}