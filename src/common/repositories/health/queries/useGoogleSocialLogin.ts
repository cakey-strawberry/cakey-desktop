import { useMutation } from '@tanstack/react-query';

import { AuthRepository } from '../../auth/repository';

type GoogleLoginMutationParams = {
  code: string;
};

export function useGoogleSocialLogin() {
  return useMutation({
    mutationFn: ({ code }: GoogleLoginMutationParams) => {
      return AuthRepository.googleLogin({
        code,
      });
    },
  });
}
