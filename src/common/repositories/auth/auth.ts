import { api } from '@/common/service/api';
import { AuthEndpointSet } from '@/common/service/endpoint';

import type { GoogleLoginResponse } from './types';

export class AuthRepository {
  static async googleLogin() {
    return api.get<GoogleLoginResponse>({
      endpointSet: AuthEndpointSet.auth.googleLogin,
    });
  }
}
