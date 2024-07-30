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
    signUp: {
      method: 'POST',
      permission: 'public',
      path: '/api/v1/auth/signUp',
    },
  },
} as const;
