import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

import { useKakaoSocialLogin } from '@/common/repositories/auth/queries/useKakaoSocialLogin';
import { isGuestData } from '@/common/repositories/auth/types';
import { authAtom, socialUserInfoAtom } from '@/common/store/atoms/authAtom';
import { JWT } from '@/common/service/jwt';

export default function KaKaoRedirection() {
  const router = useRouter();
  const { code } = router.query;

  const { mutate } = useKakaoSocialLogin();
  const setAuthState = useSetAtom(authAtom);
  const setSocialUserInfo = useSetAtom(socialUserInfoAtom);

  useEffect(() => {
    if (!code) {
      return;
    }

    mutate(
      {
        code: code as string,
      },
      {
        onSuccess: ({ data }) => {
          if (isGuestData(data)) {
            const { socialUserInfo } = data;
            setSocialUserInfo(socialUserInfo);

            router.push('/privacy-terms-sign-up');
            return;
          } else {
            JWT.setCredentials({
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            });
            setAuthState(true);
            router.push('/');
          }
        },
        onError: () => {
          /**
           * @TODO
           * UI 상으로 에러를 보여주어야 합니다.
           * ex) alert('로그인에 실패했습니다.');
           */

          router.push('/');
        },
      },
    );
  }, [mutate, code, router, setAuthState, setSocialUserInfo]);

  return <></>;
}
