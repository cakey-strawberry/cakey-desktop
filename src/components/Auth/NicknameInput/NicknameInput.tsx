import { useState, useEffect } from 'react';
import { useController } from 'react-hook-form';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';

import { Input } from '@/common/components/Input';
import ClearIcon from '@/common/assets/icons/input-clear.svg';
import WarningIcon from '@/common/assets/icons/input-warning.svg';

import type { ReactNode } from 'react';
import type { Control } from 'react-hook-form';
import type { SxProps } from '@mui/material/styles';
import type { FormValues } from '@/pages/profile-sign-up';

// NOTE: 2~8자 영문 대소문자, 숫자 및 한글(완성형)만 허용
const nicknameValidationPattern = /^[a-zA-Z0-9가-힣]{2,8}$/;

type NicknameInputProps = {
  control: Control<FormValues>;
  sx?: SxProps;
};

export default function NicknameInput({ control, sx }: NicknameInputProps) {
  const [endIcon, setEndIcon] = useState<ReactNode>(null);
  const [helperText, setHelperText] = useState<string>('');
  const {
    field: { value, onChange },
    fieldState: { error, isDirty },
  } = useController({
    control,
    name: 'nickname',
    rules: {
      required: {
        value: true,
        message: '',
      },
      maxLength: {
        value: 8,
        message: '닉네임은 최대 8자까지 가능합니다.',
      },
      pattern: {
        value: nicknameValidationPattern,
        message: '닉네임은 2~8자의 한글, 영문, 숫자만 사용 가능해요.',
      },
    },
  });

  useEffect(() => {
    let endIcon = null;
    let helperText = '';

    if (error) {
      endIcon = (
        <Image src={WarningIcon} alt="warning" width={40} height={40} />
      );
      helperText = error.message || '';
    } else if (isDirty && value) {
      endIcon = (
        <IconButton
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
          }}
          onClick={() => onChange('')}
        >
          <Image src={ClearIcon} alt="clear" width={40} height={40} />
        </IconButton>
      );
      helperText = '사용이 가능한 닉네임이에요.';
    }

    setEndIcon(endIcon);
    setHelperText(helperText);
  }, [error, isDirty, value, onChange]);

  return (
    <Input<FormValues>
      name="nickname"
      control={control}
      label="닉네임"
      placeholder="닉네임을 입력해주세요."
      helperText={helperText}
      fullWidth
      InputProps={{
        autoComplete: 'off',
        endAdornment: endIcon,
      }}
      InputLabelProps={{ shrink: true }}
      sx={sx}
    />
  );
}
