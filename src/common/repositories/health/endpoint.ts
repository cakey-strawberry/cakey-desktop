export const HealthCheckEndpointSet = {
  healthCheck: {
    check: {
      method: 'GET',
      permission: 'public',
      path: '/api/v1/health',
    },
  },
} as const;
