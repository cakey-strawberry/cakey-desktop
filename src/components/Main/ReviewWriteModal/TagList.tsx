import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function TagList() {
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
      <Box sx={{ display: 'flex', marginBottom: '4px' }}>
        <Tag>디저트</Tag>
        <Tag>다양한 태그</Tag>
        <Tag>커피</Tag>
        <Tag>케이크</Tag>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Tag>다양한 태그</Tag>
        <Tag>다양한 태그</Tag>
        <Tag>커피</Tag>
        <Tag>다양한 태그</Tag>
      </Box>
    </TagListWrapper>
  );
}

const TagListWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '24px',
});

const Tag = styled(Box)({
  padding: '6px 8px',
  borderRadius: '4px',
  fontWeight: 500,
  color: '#6C757D',
  backgroundColor: '#f8f9fa',
  marginRight: '4px',
});
