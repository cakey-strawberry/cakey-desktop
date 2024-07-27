import { api } from '@/common/service/api';
import { AuthEndpointSet } from '@/common/service/endpoint';

import type { GoogleLoginResponse, SignUpResponse } from './types';

type GoogleLoginRequestParams = {
  code: string;
};

type SignUpRequestParams = {
  avatar: string;
  id: string;
  name: string;
  oauthProvider: 'Google' | 'Kakao';
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

  static async signUp({
    id,
    name,
    avatar,
    oauthProvider,
  }: SignUpRequestParams) {
    return api.post<SignUpResponse>({
      endpointSet: AuthEndpointSet.auth.signUp,
      body: {
        id,
        name,
        avatar,
        oauthProvider,
      },
    });
  }
}
