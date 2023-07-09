import { useState } from 'react';
import { useController } from 'react-hook-form';
import { styled, Box, Typography } from '@mui/material';

import { Input } from '@/common/components/Input';
import { Checkbox } from '@/common/components/Checkbox';

import type { Control } from 'react-hook-form';
import type { FormValues } from '@/pages/add-store';

type StoreAddressInputProps = {
  control: Control<FormValues>;
};

export default function StoreAddressInput({ control }: StoreAddressInputProps) {
  const [hasAddress, setHasAddress] = useState<boolean>(false);
  const {
    field: { onChange },
  } = useController({
    control,
    name: 'storeAddress',
    rules: {
      required: hasAddress ? false : {
        value: true,
        message: '',
      },
    },
  });

  function handleAddressCheckboxToggle(
      event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const currentChecked = event.target.checked;
    setHasAddress(currentChecked);

    if (currentChecked) {
      onChange('');
    }
  }

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
        disabled={hasAddress}
      />
      <StoreAddressCheckboxWrapper>
        <Checkbox
          checked={hasAddress}
          onChange={handleAddressCheckboxToggle}
          sx={{
            width: '24px',
            height: '24px',
          }}
        />
        <StoreAddressLabelText>주소가 없습니다.</StoreAddressLabelText>
      </StoreAddressCheckboxWrapper>
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
});

const RequiredFieldIndicator = styled(Typography)({
  color: '#FF5775',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '0.1px',
});

const StoreAddressCheckboxWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  width: '400px',
  height: '40px',
});

const StoreAddressLabelText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: 'normal',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.25px',
  color: '#6C757D',
});
