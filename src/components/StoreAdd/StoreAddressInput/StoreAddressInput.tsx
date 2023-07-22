import { useController } from 'react-hook-form';
import { styled, Box, Typography } from '@mui/material';

import { Input } from '@/common/components/Input';

import type { Control } from 'react-hook-form';
import type { FormValues } from '@/pages/store-add';

type StoreAddressInputProps = {
  control: Control<FormValues>;
};

export default function StoreAddressInput({ control }: StoreAddressInputProps) {
  useController({
    control,
    name: 'storeAddress',
    rules: {
      required: {
        value: true,
        message: '',
      },
    },
  });

  return (
    <StoreAddressInputWrapper>
      <StoreAddressInputTitleWrapper>
        <StoreAddressInputTitle>주소</StoreAddressInputTitle>
        <RequiredFieldIndicator>*</RequiredFieldIndicator>
      </StoreAddressInputTitleWrapper>
      <Input<FormValues>
        name="storeAddress"
        control={control}
        placeholder="가게 주소를 입력해주세요."
        fullWidth
        autoComplete="off"
      />
    </StoreAddressInputWrapper>
  );
}

const StoreAddressInputWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: '40px',
});

const StoreAddressInputTitleWrapper = styled(Box)({
  display: 'flex',
  width: '400px',
  alignItems: 'center',
  gap: '4px',
});

const StoreAddressInputTitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.15px',
  /**
   * TODO: 글자색이 배경색과 동일한 색으로 적용되어 글자가 안보이는 현상있어 일단 명시적으로 텍스트 색깔 적용
   * 전체적으로 default color 토큰 지정하는 작업 후 제거하기
   */
  color: '#111',
});

const RequiredFieldIndicator = styled(Typography)({
  color: '#FF5775',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '0.1px',
});
