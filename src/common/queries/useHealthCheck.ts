import { useQuery } from '@tanstack/react-query';

import { HealthRepository } from '../repositories/health/health';

export function useHealthCheck() {
  return useQuery({
    queryKey: ['healthCheck'],
    queryFn: () => {
      return HealthRepository.check();
    },
  });
}
