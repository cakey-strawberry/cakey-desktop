import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Dialog } from '@/common/components/Dialog';
import LogoIcon from '@/common/assets/icons/logo.svg';
import KakaoIcon from '@/common/assets/icons/kakao.svg';
import GoogleIcon from '@/common/assets/icons/google.svg';

import {
  GoogleLoginButton,
  GoogleLoginButtonText,
  KakaoLoginButton,
  KakaoLoginButtonText,
} from './NeedSignUpModal.styled';

type NeedSignUpModalProps = {
  onCloseButtonClick: () => void;
};

export default function NeedSignUpModal({
  onCloseButtonClick,
}: NeedSignUpModalProps) {
  const router = useRouter();

  function handleSocialLoginButtonClick() {
    onCloseButtonClick();
    router.push('/privacy-terms-signup');
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
