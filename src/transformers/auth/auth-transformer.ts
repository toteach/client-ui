import {
  APIAuthRequest,
  APIAuthResponse,
} from '@/stubs/_api/auth/auth';
import {
  AuthRequestData,
  AuthResponseData,
} from '@/transformers/auth/types/auth-transformer';
import {
  Transformer,
} from '@/transformers/transformer';

type Send = AuthRequestData;
type TSend = APIAuthRequest;
type Fetch = APIAuthResponse;
type TFetch = AuthResponseData;

export class AuthTransformer extends Transformer<Send, TSend, Fetch, TFetch> {
  public send(data: Send): TSend {
    return {
      email: data.email,
      password: data.password,
      remember: data.remember,
    };
  }

  public fetch(data: Fetch): TFetch {
    return {
      status: data.status,
      errors: data.errors,
    };
  }
}
