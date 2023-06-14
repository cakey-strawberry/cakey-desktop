import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const HeaderWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px',
  gap: '6px',
});

export const HeaderTitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: 700,
  fontSize: '27px',
  lineHeight: '36px',
  display: 'flex',
  alignItems: 'center',
  color: '#111111',
});

export const HeaderSubtitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.15px',
  color: '#111111',
});
