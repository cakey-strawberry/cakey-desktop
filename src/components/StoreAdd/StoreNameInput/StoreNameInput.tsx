import { useState, useEffect } from 'react';
import { useController } from 'react-hook-form';
import { styled, Box, Typography } from '@mui/material';

import { Input } from '@/common/components/Input';

import type { Control } from 'react-hook-form';
import type { FormValues } from '@/pages/store-add';

// NOTE: 20자 이내 영문 대소문자, 숫자 및 한글(자음, 모음, 완성형)만 허용 / 특수문자 제한
const storeNameValidationPattern = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{1,20}$/;

type StoreNameInputProps = {
  control: Control<FormValues>;
};

export default function StoreNameInput({ control }: StoreNameInputProps) {
  const [helperText, setHelperText] = useState<string>('');
  const {
    field: { value },
    fieldState: { error, isDirty },
  } = useController({
    control,
    name: 'storeName',
    rules: {
      required: {
        value: true,
        message: '',
      },
      maxLength: {
        value: 20,
        message: '가게 이름은 20자 이내로 제한됩니다.',
      },
      pattern: {
        value: storeNameValidationPattern,
        message: '가게 이름에 특수문자를 사용할 수 없습니다.',
      },
    },
  });

  useEffect(() => {
    let helperText = '';

    if (error) {
      helperText = error.message || '';
    } else if (isDirty && value) {
      helperText = '가게 이름은 20자 이내로 제한됩니다.';
    }

    setHelperText(helperText);
  }, [error, isDirty, value]);

  return (
    <StoreNameInputWrapper>
      <StoreNameInputTitleWrapper>
        <StoreNameInputTitle>가게명</StoreNameInputTitle>
        <RequiredFieldIndicator>*</RequiredFieldIndicator>
      </StoreNameInputTitleWrapper>
      <Input<FormValues>
        name="storeName"
        control={control}
        placeholder="가게 이름을 입력해주세요."
        helperText={helperText}
        fullWidth
        autoComplete="off"
        sx={{
          height: '56px',
        }}
      />
    </StoreNameInputWrapper>
  );
}

const StoreNameInputWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: '40px',
});

const StoreNameInputTitleWrapper = styled(Box)({
  display: 'flex',
  width: '400px',
  alignItems: 'center',
  gap: '4px',
});

const StoreNameInputTitle = styled(Typography)({
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
