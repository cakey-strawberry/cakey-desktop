import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import type { ChangeEvent } from 'react';

type ReviewCommentProps = {
  value: string;
  onTextFieldChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function ReviewWritingSection({
  value,
  onTextFieldChange,
}: ReviewCommentProps) {
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
      <ReviewTextField
        value={value}
        onChange={onTextFieldChange}
        placeholder="가게에 대한 리뷰를 남겨주세요!"
        multiline
      />
    </ReviewCommentWrapper>
  );
}

const ReviewCommentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '24px',
});

const ReviewTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    padding: '16px',
  },
  '& fieldset': {
    border: '1px solid #a4aaae',
  },
  '& textarea': {
    minHeight: '136px',
    maxHeight: '136px',
  },
});
