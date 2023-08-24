import Box from '@mui/material/Box';
import { styled, Typography } from '@mui/material';

import { Button } from '@/common/components/Button';

const tagTextList = [
  '디저트', '다양한 태그', '디저트', '커피', '다양한 태그',
  '커피', '다양한 태그', '디저트', '다양한 태그', '디저트', '커피',
];

export default function TagSection() {
  return (
    <TagSectionWrapper>
      <TagSectionTitleWrapper>
        <TagSectionTitle>태그</TagSectionTitle>
      </TagSectionTitleWrapper>
      <TagGroup>
        {tagTextList.map((tag, index) => {
          return (
            <TagButton key={index}>
              <TagButtonText>{tag}</TagButtonText>
            </TagButton>
          );
        })}
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
  /**
   * TODO: 글자색이 배경색과 동일한 색으로 적용되어 글자가 안보이는 현상있어 일단 명시적으로 텍스트 색깔 적용
   * 전체적으로 default color 토큰 지정하는 작업 후 제거하기
   */
  color: '#111111',
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
