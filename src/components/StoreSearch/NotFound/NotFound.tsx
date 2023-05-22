import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Image from 'next/image';

import { Button } from '@/common/components/Button';
import NotFoundIcon from '@/common/assets/icons/not-found.svg';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ marginBottom: '40px' }}>
        <Image src={NotFoundIcon} alt="not found" />
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '36px',
          color: '#111111',
          marginBottom: '6px',
        }}
      >
        앗! 검색 결과가 없어요.
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#111111',
          letterSpacing: '0.15px',
        }}
      >
        원하는 가게가 없다면 케이키팀에게 제안 주세요.
      </Typography>
      <Button
        sx={{
          width: '305px',
          height: '56px',
          marginTop: '40px',
          backgroundColor: '#FF5775',
          borderRadius: '100px',
          color: '#ffffff',
        }}
      >
        + 가게 제안하기
      </Button>
    </Box>
  );
}
