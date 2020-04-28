export interface AuthRequestData {
  email: string;
  password: string;
  remember: boolean;
}

export interface AuthResponseData {
  status: number;
  errors?: string[];
}
