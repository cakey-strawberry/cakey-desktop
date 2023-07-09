import { useController } from 'react-hook-form';
import { styled, Box, Typography } from '@mui/material';

import { Input } from '@/common/components/Input';

import type { Control } from 'react-hook-form';
import type { FormValues } from '@/pages/add-store-recommendation';

type ReviewWritingSectionProps = {
  control: Control<FormValues>;
};

export default function ReviewWritingSection(
    { control }: ReviewWritingSectionProps,
) {
  useController({
    control,
    name: 'reviewContent',
    rules: {
      required: {
        value: true,
        message: '',
      },
      minLength: {
        value: 50,
        message: '',
      },
      maxLength: {
        value: 300,
        message: '',
      },
    },
  });

  return (
    <ReviewWritingSectionWrapper>
      <ReviewWritingTitleWrapper>
        <ReviewWritingTitle>리뷰</ReviewWritingTitle>
      </ReviewWritingTitleWrapper>
      <Input<FormValues>
        name="reviewContent"
        control={control}
        placeholder="가게에 대한 리뷰를 남겨주세요! (최소 50자, 최대 300자)"
        fullWidth
        autoComplete="off"
        multiline
        sx={{
          height: '152px',
          // NOTE: TextField의 'input 영역'을 감싸고 있는 div에 적용된 스타일
          '& .MuiInputBase-root': {
            padding: '16px',
          },
          // NOTE: TextField의 'input 영역' 내부의 텍스트를 입력하는 영역에 적용된 스타일
          '& .MuiInputBase-input': {
            minHeight: '136px',
            maxHeight: '136px',
          },
        }}
      />
    </ReviewWritingSectionWrapper>
  );
}

const ReviewWritingSectionWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: '96px',
});

const ReviewWritingTitleWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '400px',
  gap: '4px',
});

const ReviewWritingTitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.15px',
});
