import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Button } from '@/common/components/Button';

export const TermsCheckboxWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  width: '400px',
  height: '40px',
});

export const TermsLabelAndDetailsViewbutton = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '360px',
});

export const TermsLabel = styled(Box)({
  display: 'flex',
  gap: '4px',
});

export const TermsLabelText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: 'normal',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.15px',
  color: '#111111',
});

export const TermsLabeSubtext = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: 'normal',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.1px',
  color: '#6C757D',
});

export const TermsDetailsViewbutton = styled(Button)({
  padding: '0px',
});
