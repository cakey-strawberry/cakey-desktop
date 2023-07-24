import Image from 'next/image';
import Box from '@mui/material/Box';
import { Controller } from 'react-hook-form';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Button } from '@/common/components/Button';
import CloseIcon from '@/common/assets/icons/tag-close.svg';

import type { Control } from 'react-hook-form';
import type { ReviewWriteFormValues } from './hooks/useReviewForm';

const TAGS = [
  '디저트',
  '커피',
  '케이크',
  '빵',
  '뷰 맛집',
  '아이스크림',
  '샐러드',
  '맛있는',
  '달달한',
  '배부른',
];

type TagListProps = {
  currentTags: string[];
  control: Control<ReviewWriteFormValues>;
  onChange: (tags: string[]) => void;
};

export default function TagList({
  control,
  currentTags,
  onChange,
}: TagListProps) {
  function handleButtonClick(value: string) {
    if (currentTags.includes(value)) {
      onChange(currentTags.filter((tag) => tag !== value));
    } else {
      onChange([...currentTags, value]);
    }
  }

  return (
    <TagListWrapper>
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#111111',
          marginBottom: '8px',
        }}
      >
        태그
      </Typography>
      <Controller
        name="tags"
        control={control}
        render={({ field: { value } }) => (
          <Box
            sx={{
              width: '350px',
              display: 'flex',
              marginBottom: '4px',
              flexWrap: 'wrap',
              gap: '4px 5px',
            }}
          >
            {TAGS.map((dessert) => {
              const isSelected = value.includes(dessert);
              return (
                <Tag
                  key={dessert}
                  value={dessert}
                  onClick={() => handleButtonClick(dessert)}
                  isSelected={value.includes(dessert)}
                >
                  {dessert}
                  {isSelected && (
                    <Image
                      style={{ zIndex: 10 }}
                      alt="tag close"
                      src={CloseIcon}
                    />
                  )}
                </Tag>
              );
            })}
          </Box>
        )}
      />
    </TagListWrapper>
  );
}

const TagListWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '24px',
});

const Tag = styled(Button, {
  shouldForwardProp: (prop: string) => !['isSelected'].includes(prop),
})<{ isSelected?: boolean }>(({ isSelected }) => ({
  padding: '6px 8px',
  borderRadius: '4px',
  fontWeight: 500,
  color: isSelected ? '#FA3B5E' : '#6C757D',
  backgroundColor: isSelected ? 'rgba(250, 59, 94, 0.2)' : '#f8f9fa',
  '&:hover': {
    backgroundColor: isSelected ? 'rgba(250, 59, 94, 0.2)' : '#f8f9fa',
  },
}));
