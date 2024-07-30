import { useQuery } from '@tanstack/react-query';

import { HealthRepository } from '../repository';

export function useHealthCheck() {
  return useQuery({
    queryKey: ['healthCheck'],
    queryFn: () => {
      return HealthRepository.check();
    },
  });
}
