import { useMutation } from '@tanstack/react-query';

import { AuthRepository } from '../repository';

type KakaoLoginMutationParams = {
  code: string;
};

export function useKakaoSocialLogin() {
  return useMutation({
    mutationFn: ({ code }: KakaoLoginMutationParams) => {
      return AuthRepository.kakaoLogin({
        code,
      });
    },
  });
}
