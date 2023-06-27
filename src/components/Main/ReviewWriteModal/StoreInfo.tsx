import Image from 'next/image';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import MockThumbnailImage from '@/common/assets/icons/thumbnail.png';
import PlaceIcon from '@/common/assets/icons/place.svg';

export default function StoreInfo() {
  return (
    <StoreInfoWrapper>
      <StoreThumbnailWrapper>
        <Image src={MockThumbnailImage} alt="store thumbnail" fill />
      </StoreThumbnailWrapper>
      <StoreTittleAndAddressWrapper>
        <Typography
          sx={{
            color: '#404040',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '4px',
          }}
        >
          테디뵈르 하우스 테디뵈르
        </Typography>
        <Typography
          sx={{
            color: '#6c757d',
            fontSize: '11px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            style={{ marginRight: '4px' }}
            src={PlaceIcon}
            alt="place"
            width={16}
            height={16}
          />{' '}
          서울특별시 용산구 한강대로40가길 42 1층
        </Typography>
      </StoreTittleAndAddressWrapper>
    </StoreInfoWrapper>
  );
}

const StoreInfoWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'left',
  alignContent: 'center',
  marginBottom: '24px',
});

const StoreThumbnailWrapper = styled(Box)({
  position: 'relative',
  width: '80px',
  height: '80px',
  borderRadius: '24px',
  overflow: 'hidden',
  marginRight: '12px',
});

const StoreTittleAndAddressWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
});
