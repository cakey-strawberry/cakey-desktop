import { api } from '@/common/service/api';

import { AuthEndpointSet } from './endpoint';

import type {
  GoogleLoginResponse,
  KakaoLoginResponse,
  SignUpResponse,
} from './types';

type GoogleLoginRequestParams = {
  code: string;
};

type KakaoLoginRequestParams = {
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

  static async kakaoLogin({ code }: KakaoLoginRequestParams) {
    return api.post<KakaoLoginResponse>({
      endpointSet: AuthEndpointSet.auth.kakaoLogin,
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

  static async autoSignIn() {
    return api.get({
      endpointSet: AuthEndpointSet.auth.autoSignIn,
    });
  }
}
