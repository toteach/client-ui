export interface State {
  authenticated: boolean;
  errors: AuthError[];
}

export interface AuthError {
  title: string;
  message: string;
}
