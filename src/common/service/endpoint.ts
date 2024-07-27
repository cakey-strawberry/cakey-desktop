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
  },
} as const;

export const HealthCheckEndpointSet = {
  healthCheck: {
    check: {
      method: 'GET',
      permission: 'public',
      path: '/api/v1/health',
    },
  },
} as const;
