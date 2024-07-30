import { useMutation } from '@tanstack/react-query';

import { AuthRepository } from '../repository';

type useSignUpParams = {
  id: string;
  avatar: string;
  name: string;
  oauthProvider: 'Google' | 'Kakao';
};

export function useSignUp() {
  return useMutation({
    mutationFn: ({ id, avatar, name, oauthProvider }: useSignUpParams) =>
      AuthRepository.signUp({
        id,
        avatar,
        name,
        oauthProvider,
      }),
  });
}
