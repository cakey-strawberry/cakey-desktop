import Image from 'next/image';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import CameraIcon from '@/common/assets/icons/camera.svg';

export default function PhotoUploader() {
  return (
    <AddingPhotoWrapper>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 700,
            color: '#111111',
            marginRight: '4px',
          }}
        >
          사진 첨부
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#6C757D',
          }}
        >
          (최대 3장)
        </Typography>
      </Box>
      <PhotoUploaderSlotList>
        <PhotoSelector>
          <Image width={24} height={24} src={CameraIcon} alt="camera" />
        </PhotoSelector>
        <PhotoSelector>
          <Image width={24} height={24} src={CameraIcon} alt="camera" />
        </PhotoSelector>
        <PhotoSelector>
          <Image width={24} height={24} src={CameraIcon} alt="camera" />
        </PhotoSelector>
      </PhotoUploaderSlotList>
    </AddingPhotoWrapper>
  );
}

const AddingPhotoWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '24px',
});

const PhotoUploaderSlotList = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const PhotoSelector = styled(Box)({
  width: '131px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  border: '1px solid #6C757D',
});
