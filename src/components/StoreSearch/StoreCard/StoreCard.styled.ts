import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const StoreWrapper = styled(Box)({
  display: 'flex',
  width: '496px',
  padding: '16px 0',
  borderBottom: '1px solid #E9ECEF',
});

export const StoreImageWrapper = styled(Box)({
  position: 'relative',
  width: '160px',
  height: '160px',
  marginRight: '16px',
  borderRadius: '12px',
  overflow: 'hidden',
});

export const StoreInfoWrapper = styled(Box)({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

export const StoreHeader = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

export const StoreInfo = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StoreTitleWrapper = styled(Box)({
  display: 'flex',
});

export const StoreTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: '20px',
  marginBottom: '4px',
  lineHeight: '28px',
  color: '#111111',
});

export const StoreFavoriteButton = styled(Box)({
  minWidth: 0,
  maxWidth: '24px',
  maxHeight: '24px',
  padding: 0,
});

export const StoreAddress = styled(Typography)({
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '8px',
  letterSpacing: '0.25px',
  color: '#6C757D',
});

export const StoreCommentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '320px',
  padding: '12px',
  marginTop: '16px',
  backgroundColor: '#F8F9FA',
  borderRadius: '8px',
});

export const StoreComment = styled(Box)({
  display: 'flex',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.25px',
  color: '#495057',
});

export const StoreCommentUserWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',
});

export const StoreUserProfile = styled(Box)({
  position: 'relative',
  width: '32px',
  height: '32px',
  marginRight: '8px',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const StoreUserName = styled(Typography)({
  color: '#6C757D',
  marginRight: '2px',
});
