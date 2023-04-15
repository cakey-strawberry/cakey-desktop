import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const StoreWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '360px',
  width: '360px',
  height: '100%',
  borderRadius: '24px',
  overflow: 'hidden',
  zIndex: 10,
  backgroundColor: '#ffffff',
  color: '#000000',
  borderBottom: '1px solid #F3F0F4',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
});

export const StoreInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '50%',
  borderBottom: '1px solid #F3F0F4',
});

export const StoreImage = styled(Box)({
  width: '100%',
  height: '80%',
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
});

export const StoreDetailInfoWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '50%',
  padding: '16px 16px 24px 16px',
});

export const StoreNameAndFavorite = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '36px',
});

export const StoreName = styled(Box)({
  flex: 1,
  width: '284px',
  fontWeight: 700,
  fontSize: '24px',
});

export const StoreChips = styled(Box)({
  display: 'flex',
  margin: '12px 0',
});

export const StoreDetailInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#78767A',
});

export const TimePointer = styled(Box)({
  width: '3px',
  height: '3px',
  backgroundColor: '#C8C6CA',
  borderRadius: '50%',
  margin: '0 4px',
});
