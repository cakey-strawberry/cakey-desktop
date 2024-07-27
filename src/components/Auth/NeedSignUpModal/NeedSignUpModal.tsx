import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useGoogleLogin } from '@react-oauth/google';
import { useSetAtom } from 'jotai';

import { Dialog } from '@/common/components/Dialog';
import LogoIcon from '@/common/assets/icons/logo.svg';
import KakaoIcon from '@/common/assets/icons/kakao.svg';
import GoogleIcon from '@/common/assets/icons/google.svg';
import { useGoogleSocialLogin } from '@/common/queries/useGoogleSocialLogin';
import { isGuestData } from '@/common/repositories/auth/types';
import { JWT } from '@/common/service/jwt';
import { authAtom, socialUserInfoAtom } from '@/common/store/atoms/authAtom';

import {
  GoogleLoginButton,
  GoogleLoginButtonText,
  KakaoLoginButton,
  KakaoLoginButtonText,
} from './NeedSignUpModal.styled';

type NeedSignUpModalProps = {
  onCloseButtonClick: () => void;
};

type SetTokensParams = {
  accessToken: string;
  refreshToken: string;
};

export default function NeedSignUpModal({
  onCloseButtonClick,
}: NeedSignUpModalProps) {
  const router = useRouter();
  const socialLoginQuery = useGoogleSocialLogin();
  const setAuthState = useSetAtom(authAtom);
  const setSocialUserInfo = useSetAtom(socialUserInfoAtom);

  const login = useGoogleLogin({
    flow: 'auth-code',
    /**
     * @NOTE
     * popup mode에서는 redirect_uri를 postmessage로 설정해야 함
     * https://github.com/MomenSherif/react-oauth/issues/252
     */
    redirect_uri: 'postmessage',
    onSuccess: async (tokenResponse) => {
      socialLoginQuery.mutate(
        {
          code: tokenResponse.code,
        },
        {
          onSuccess: ({ data }) => {
            if (isGuestData(data)) {
              onCloseButtonClick();
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
              onCloseButtonClick();
            }
          },
          onError: () => {
            /**
             * @TODO
             * UI 상으로 에러를 보여주어야 합니다.
             * ex) alert('로그인에 실패했습니다.');
             */

            onCloseButtonClick();
          },
        },
      );
    },
  });

  function handleSocialLoginButtonClick() {
    login();
  }

  return (
    <Dialog.Wrapper open={true} width="376px" onClose={onCloseButtonClick}>
      <Dialog.Title
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        <Image src={LogoIcon} alt="logo" width={100} height={22.5} />
      </Dialog.Title>

      <Dialog.Content
        sx={{
          width: '328px',
          height: '40px',
          fontFamily: 'Pretendard',
          lineHeight: '20px',
          textAlign: 'center',
          letterSpacing: '0.25px',
          color: '#212529',
        }}
      >
        케이키에 가입하고
        <br />
        진짜 베이커리 추천을 해주세요!
      </Dialog.Content>
      <Dialog.Actions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '328px',
          height: '112px',
          marginTop: '16px',
          gap: '8px',
        }}
        disableSpacing
      >
        <GoogleLoginButton onClick={handleSocialLoginButtonClick}>
          <Image src={GoogleIcon} width={18} height={18} alt="Google logo" />
          <GoogleLoginButtonText>
            Google 계정으로 계속하기
          </GoogleLoginButtonText>
        </GoogleLoginButton>
        <KakaoLoginButton onClick={handleSocialLoginButtonClick}>
          <Image src={KakaoIcon} width={24} height={24} alt="Kakao logo" />
          <KakaoLoginButtonText>카카오로 계속하기</KakaoLoginButtonText>
        </KakaoLoginButton>
      </Dialog.Actions>
    </Dialog.Wrapper>
  );
}
