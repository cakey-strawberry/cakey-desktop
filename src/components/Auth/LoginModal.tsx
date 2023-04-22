import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button, Typography } from '@mui/material';

import { Dialog } from '@/common/components/Dialog';

import LogoIcon from '@/common/assets/icons/logo.svg';
import KakaoIcon from '@/common/assets/icons/kakao.svg';
import GoogleIcon from '@/common/assets/icons/google.svg';

type LoginModalProps = {
  onCloseButtonClick: () => void;
};

export function LoginModal({ onCloseButtonClick }: LoginModalProps) {
  const router = useRouter();

  function handleSocialLoginButtonClick() {
    onCloseButtonClick();
    router.push('/privacy-terms-signup');
  }

  return (
    <Dialog.Wrapper
      open={true}
      width="376px"
      onClose={onCloseButtonClick}
    >
      <Dialog.Title
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '24px',
        }}>
        <Image src={LogoIcon} alt="logo" width={100} height={22.5} />
      </Dialog.Title>
      <Dialog.Content
        sx={{
          width: '328px',
          height: '40px',
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontSize: '14px',
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
        <Button
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
            gap: '8px',
            width: '328px',
            height: '52px',
            bgcolor: '#FFFFFF',
            border: '1px solid #E9ECEF',
            borderRadius: '50px',
            textTransform: 'none',
          }}
          onClick={handleSocialLoginButtonClick}
        >
          <Image src={GoogleIcon} width={18} height={18} alt="Google logo" />
          <Typography sx={{
            height: '24px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '16px',
            /**
             * NOTE: Figma(디자인)에 지정되어 있는 값은 line-height: 24px 임
             * but, 스타일 적용했을 때 텍스트가 로고보다 조금 더 위쪽에 위치해서 27px을 주어 위치를 조정함
             */
            lineHeight: '27px',
            textAlign: 'center',
            letterSpacing: '0.15px',
            color: '#495057',
          }}>
            Google 계정으로 계속하기
          </Typography>
        </Button>
        <Button
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
            margin: '0px',
            gap: '8px',
            width: '328px',
            height: '52px',
            bgcolor: '#FEE500',
            borderRadius: '50px',
          }}
          onClick={handleSocialLoginButtonClick}
        >
          <Image src={KakaoIcon} width={24} height={24} alt="Kakao logo" />
          <Typography sx={{
            height: '24px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '16px',
            /**
             * NOTE: Figma(디자인)에 지정되어 있는 값은 line-height: 24px 임
             * but, 스타일 적용했을 때 텍스트가 로고보다 조금 더 위쪽에 위치해서 27px을 주어 위치를 조정함
             */
            lineHeight: '27px',
            textAlign: 'center',
            letterSpacing: '0.15px',
            color: '#000000',
          }}>
            카카오로 계속하기
          </Typography>
        </Button>
      </Dialog.Actions>
    </Dialog.Wrapper>
  );
}
