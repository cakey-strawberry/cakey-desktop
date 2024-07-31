export const AuthEndpointSet = {
  auth: {
    refreshTokens: {
      method: 'POST',
      permission: 'private',
      path: '/api/v1/auth/refresh',
    },
    googleLogin: {
      method: 'POST',
      permission: 'public',
      path: '/api/v1/auth/google/signIn',
    },
    kakaoLogin: {
      method: 'POST',
      permission: 'public',
      path: '/api/v1/auth/kakao/signIn',
    },
    signUp: {
      method: 'POST',
      permission: 'public',
      path: '/api/v1/auth/signUp',
    },
    autoSignIn: {
      method: 'GET',
      permission: 'private',
      path: '/api/v1/auth/autoSignIn',
    },
  },
} as const;
