import { useQuery } from '@tanstack/react-query';

import { AuthRepository } from '../repository';

export function useAutoSignIn() {
  return useQuery({
    queryKey: ['autoSignIn'],
    queryFn: () => {
      return AuthRepository.autoSignIn();
    },
    staleTime: Infinity,
  });
}
