export interface APIAuthRequest {
  email: string;
  password: string;
  remember: boolean;
}

export interface APIAuthResponse {
  status: number;
  errors?: string[];
}

export function checkCredentials(payload: APIAuthRequest): APIAuthResponse {
  const { email } = payload;

  if (email.includes('admin')) {
    return {
      status: 200,
    };
  }

  return {
    status: 401,
    errors: ['Incorrect Password'],
  };
}
