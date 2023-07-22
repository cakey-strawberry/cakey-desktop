import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Input } from '@/common/components/Input';

import type { Control } from 'react-hook-form';
import type { ReviewWriteFormValues } from './hooks/useReviewForm';

type ReviewCommentProps = {
  control: Control<ReviewWriteFormValues>;
};

export default function ReviewWritingSection({ control }: ReviewCommentProps) {
  return (
    <ReviewCommentWrapper>
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#111111',
          marginBottom: '8px',
        }}
      >
        리뷰
      </Typography>
      <Input<ReviewWriteFormValues>
        name="comment"
        control={control}
        placeholder="가게에 대한 리뷰를 남겨주세요!"
        multiline
        sx={{
          width: '100%',
          '& .MuiInputBase-root': {
            width: '100%',
            padding: '16px',
          },
          '& fieldset': {
            border: '1px solid #a4aaae',
          },
          '& textarea': {
            minHeight: '136px',
          },
        }}
      />
    </ReviewCommentWrapper>
  );
}

const ReviewCommentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '24px',
});
