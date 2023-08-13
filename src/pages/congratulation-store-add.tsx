import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled, Box } from '@mui/material';

import { ContentHeader } from '@/common/components/ContentHeader';
import { NextButton } from '@/components/Auth/NextButton';
import CongratulationImage
  from '@/common/assets/icons/congratulation-check.svg';

export default function CongratulationStoreAdd() {
  const router = useRouter();

  function handleButtonClick() {
    router.push('/');
  }

  return (
    <PageWrapper>
      <ContentHeader
        title="스토어 등록을 완료하였습니다!"
        subtitle="스토어 검토 후 등록이 완료됩니다."
      />
      <PageContent>
        <Image
          src={CongratulationImage}
          alt="축하 이미지"
          width={160}
          height={160}
        />
        <NextButton type="button" text="메인으로" onClick={handleButtonClick} />
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
