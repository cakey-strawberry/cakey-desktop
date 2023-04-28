import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const GoogleLoginButton = styled(Button)({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  gap: '8px',
  width: '328px',
  height: '52px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E9ECEF',
  borderRadius: '50px',
  textTransform: 'none',
});

export const GoogleLoginButtonText = styled(Typography)({
  height: '24px',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  /**
   * NOTE: Figma(디자인)에 지정되어 있는 값은 line-height: 24px 임
   * but, 스타일 적용했을 때 텍스트가 로고보다 조금 더 위쪽에 위치해서 27px을 주어 위치를 조정함
   */
  lineHeight: '27px',
  textAlign: 'center',
  letterSpacing: '0.15px',
  color: '#495057',
});

export const KakaoLoginButton = styled(Button)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  margin: '0px',
  gap: '8px',
  width: '328px',
  height: '52px',
  backgroundColor: '#FEE500',
  borderRadius: '50px',
});

export const KakaoLoginButtonText = styled(Typography)({
  height: '24px',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  /**
   * NOTE: Figma(디자인)에 지정되어 있는 값은 line-height: 24px 임
   * but, 스타일 적용했을 때 텍스트가 로고보다 조금 더 위쪽에 위치해서 27px을 주어 위치를 조정함
   */
  lineHeight: '27px',
  textAlign: 'center',
  letterSpacing: '0.15px',
  color: '#000000',
});
