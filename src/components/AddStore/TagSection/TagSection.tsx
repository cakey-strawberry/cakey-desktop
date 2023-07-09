import Box from '@mui/material/Box';
import { styled, Typography } from '@mui/material';

import { Button } from '@/common/components/Button';

export default function TagSection() {
  return (
    <TagSectionWrapper>
      <TagSectionTitleWrapper>
        <TagSectionTitle>태그</TagSectionTitle>
      </TagSectionTitleWrapper>
      <TagGroup>
        <TagButton>
          <TagButtonText>디저트</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>다양한 태그</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>디저트</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>커피</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>다양한 태그</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>커피</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>다양한 태그</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>디저트</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>다양한 태그</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>디저트</TagButtonText>
        </TagButton>
        <TagButton>
          <TagButtonText>커피</TagButtonText>
        </TagButton>
      </TagGroup>
    </TagSectionWrapper>
  );
}

const TagSectionWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: '80px',
});

const TagSectionTitleWrapper = styled(Box)({
  display: 'flex',
  width: '400px',
  gap: '4px',
});

const TagSectionTitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.15px',
});

const TagGroup = styled(Box)({
  display: 'flex',
  width: '400px',
  alignItems: 'flex-start',
  gap: '5px',
  flexWrap: 'wrap',
});

const TagButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 8px',
  gap: '8px',
  borderRadius: '8px',
  background: '#F8F9FA',
});

const TagButtonText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  color: '#6C757D',
});
