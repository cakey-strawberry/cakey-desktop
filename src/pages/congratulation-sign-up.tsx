import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled, Box } from '@mui/material';

import { ContentHeader } from '@/common/components/ContentHeader';
import { NextButton } from '@/components/Auth/NextButton';
import CongratulationImage
  from '@/common/assets/icons/congratulation-check.svg';

export default function CongratulationSignUp() {
  const router = useRouter();

  function handleButtonClick() {
    router.push('/');
  }

  return (
    <PageWrapper>
      <ContentHeader
        title="진심으로 환영합니다!"
        subtitle="가입이 완료 되었어요."
      />
      <PageContent>
        <Image
          src={CongratulationImage}
          alt="축하 이미지"
          width={160}
          height={160}
        />
        <NextButton type="button" text="로그인하기" onClick={handleButtonClick} />
      </PageContent>
    </PageWrapper>
  );
}

export const PageWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px',
  gap: '40px',
  marginTop: '60px',
});

export const PageContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
});
