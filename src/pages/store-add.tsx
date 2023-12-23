import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { styled, Box } from '@mui/material';

import { ContentHeader } from '@/common/components/ContentHeader';
import { StoreNameInput } from '@/components/StoreAdd/StoreNameInput';
import { StoreAddressInput } from '@/components/StoreAdd/StoreAddressInput';
import { OpeningHourSection } from '@/components/StoreAdd/OpeningHourSection';
import { PhotoUploader } from '@/components/StoreAdd/PhotoUploader';
import { TagSection } from '@/components/StoreAdd/TagSection';
import { NextButton } from '@/components/StoreAdd/NextButton';

export type FormValues = {
  storeName: string;
  storeAddress: string;
  // TODO: 기능 추가시 주석제거 후 사용하기
  // openingHours?: object;
  // pictures?: File[];
  // tags?: string[];
}

export default function StoreAdd() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      storeName: '',
      storeAddress: '',
      // TODO: 기능 추가시 주석제거 후 사용하기
      // openingHours: {},
      // pictures: [],
      // tags: [],
    },
  });
  const router = useRouter();

  function onSubmit(formValues: FormValues) {
    // TODO: form value 확인용. api 연결 시 해당 console.log는 제거하기
    console.log(formValues);
    router.push('/store-recommendation-add');
  }

  return (
    <>
      <PageWrapper>
        <ContentHeader
          title="스토어 등록"
          subtitle="맛있는 정보를 공유할 수 있습니다."
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <StoreNameInput control={control} />
          <StoreAddressInput control={control} />
          <OpeningHourSection />
          <PhotoUploader />
          <TagSection />
          <NextButton type="submit" text="등록하기" disabled={!isValid} />
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
  /**
   * NOTE: height이 넘쳐서 레이아웃 틀어지는 현상 발생
   * 스크롤바를 숨기고 스크롤 가능하도록 height과 scroll 관련 style 적용
   */
  height: 'calc(100% - 80px)',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});
