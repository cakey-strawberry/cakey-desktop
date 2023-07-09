import Image from 'next/image';
import Box from '@mui/material/Box';
import { styled, Typography } from '@mui/material';

import CameraIcon from '@/common/assets/icons/uploader-camera.svg';

export default function PhotoUploader() {
  return (
    <PhotoUploaderWrapper>
      <PhotoUploaderTitleWrapper>
        <PhotoUploaderTitle>사진 첨부</PhotoUploaderTitle>
        <PhotoUploaderSubtitle>(최대 3장)</PhotoUploaderSubtitle>
      </PhotoUploaderTitleWrapper>
      <PhotoUploaderSlotList>
        <PhotoUploaderSlot>
          <Image width={24} height={24} src={CameraIcon} alt="camera" />
        </PhotoUploaderSlot>
        <PhotoUploaderSlot>
          <Image width={24} height={24} src={CameraIcon} alt="camera" />
        </PhotoUploaderSlot>
        <PhotoUploaderSlot>
          <Image width={24} height={24} src={CameraIcon} alt="camera" />
        </PhotoUploaderSlot>
      </PhotoUploaderSlotList>
    </PhotoUploaderWrapper>
  );
}

const PhotoUploaderWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: '40px',
});

const PhotoUploaderTitleWrapper = styled(Box)({
  display: 'flex',
  width: '400px',
  alignItems: 'center',
  gap: '4px',
});

const PhotoUploaderTitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.15px',
});

const PhotoUploaderSubtitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  color: '#6C757D',
});

const PhotoUploaderSlotList = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  width: '400px',
  height: '100px',
  gap: '8px',
});

const PhotoUploaderSlot = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  flex: '1 0 0',
  alignSelf: 'stretch',
  borderRadius: '4px',
  border: '1px solid #6C757D',
});
