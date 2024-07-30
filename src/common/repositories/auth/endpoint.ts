export const AuthEndpointSet = {
  auth: {
    refreshTokens: {
      method: 'POST',
      permission: 'private',
      path: '/api/v1/auth/refresh',
    },
    googleLogin: {
      method: 'GET',
      permission: 'public',
      path: '/api/v1/auth/google',
    },
  },
} as const;
