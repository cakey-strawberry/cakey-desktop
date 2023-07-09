import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { styled, Box } from '@mui/material';

import { ContentHeader } from '@/common/components/ContentHeader';
import { Button } from '@/common/components/Button';
import {
  ReviewWritingSection,
} from '@/components/AddStore/ReviewWritingSection';
import { NextButton } from '@/components/AddStore/NextButton';

export type FormValues = {
  reviewContent: string;
}

export default function AddStoreRecommendation() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    defaultValues: {
      reviewContent: '',
    },
  });
  const router = useRouter();

  function onSubmit(formValues: FormValues) {
    // TODO: form value 확인용. api 연결 시 해당 console.log는 제거하기
    console.log(formValues);
    router.push('/congratulation-add-store');
  }

  return (
    <>
      <PageWrapper>
        <ContentHeader
          title="이곳을 추천하고 싶으신가요?"
          subtitle="리뷰를 공유해주세요."
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReviewWritingSection control={control} />
          <ButtonWrapper>
            <SkipButton
              onClick={() => router.push('/congratulation-add-store')}
            >
              건너뛰기
            </SkipButton>
            <NextButton type="submit" text="등록하기" disabled={!isValid} />
          </ButtonWrapper>
        </form>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px',
  gap: '40px',
  position: 'relative',
  width: '400px',
  left: '500px',
  top: '60px',
});

const ButtonWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  alignSelf: 'stretch',
});

const SkipButton = styled(Button)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.1px',
  color: '#ADB5BD',
});
