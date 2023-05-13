import { Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';

import { NicknameTextField } from './NicknameInput.styled';

import ClearIcon from '@/common/assets/icons/input-clear.svg';
import WarningIcon from '@/common/assets/icons/input-warning.svg';

import type { Control } from 'react-hook-form';
import type { FormValues } from '@/pages/profile-sign-up';

type NicknameInputProps = {
  control: Control<FormValues>;
};

export default function NicknameInput({ control }: NicknameInputProps) {
  return (
    <Controller
      name="nickname"
      control={control}
      defaultValue=""
      rules={{
        required: {
          value: true,
          message: '',
        },
        maxLength: {
          value: 8,
          message: '닉네임은 최대 8자까지 가능합니다.',
        },
        pattern: {
          value: /^[a-zA-Z0-9가-힣]{2,8}$/,
          message: '닉네임은 2~8자의 한글, 영문, 숫자만 사용 가능해요.',
        },
      }}
      render={({ field, fieldState: { error, isDirty } }) => {
        let endIcon = null;

        if (error) {
          endIcon = (
            <Image src={WarningIcon} alt="warning" width={40} height={40} />
          );
        } else if (field.value) {
          endIcon = (
            <IconButton
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
              }}
              onClick={() => field.onChange('')}
            >
              <Image src={ClearIcon} alt="clear" width={40} height={40} />
            </IconButton>
          );
        }

        return (
          <NicknameTextField
            {...field}
            label="닉네임"
            variant="outlined"
            fullWidth
            placeholder="닉네임을 입력해주세요."
            error={Boolean(error)}
            helperText={
              isDirty ? (error ? error.message : '사용이 가능한 닉네임이에요.') : ''
            }
            InputProps={{
              autoComplete: 'off',
              endAdornment: endIcon,
            }}
            InputLabelProps={{ shrink: true }}
          />
        );
      }}
    />
  );
}
