import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const AllTermsCheckboxWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  width: '400px',
  height: '40px',
});

export const AllTermsLabelText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: 'normal',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.15px',
  color: '#111111',
});
