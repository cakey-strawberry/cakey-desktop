import { api } from '@/common/service/api';
import { AuthEndpointSet } from '@/common/service/endpoint';

import type { GoogleLoginResponse } from './types';

type GoogleLoginRequestParams = {
  code: string;
};

export class AuthRepository {
  static async googleLogin({ code }: GoogleLoginRequestParams) {
    return api.post<GoogleLoginResponse>({
      endpointSet: AuthEndpointSet.auth.googleLogin,
      body: {
        code,
      },
    });
  }
}
