import Image from 'next/image';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { styled } from '@mui/material';

import { Button } from '@/common/components/Button';
import CameraIcon from '@/common/assets/icons/camera.svg';
import CloseIcon from '@/common/assets/icons/black-close.svg';

import type { ChangeEvent, MouseEvent } from 'react';
import type { Photo } from './hooks/useReviewForm';

type PhotoUploaderSlotProps = {
  photos: Photo[];
  id: number;
  onChange: (photos: Photo[]) => void;
};

export default function PhotoUploaderSlot({
  id,
  photos,
  onChange,
}: PhotoUploaderSlotProps) {
  const photo = photos[id];

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const currentPhotoInfo: Photo = { file, id };
    const currentPhotos = photos.map((prevPhoto) =>
      prevPhoto.id === id ? currentPhotoInfo : prevPhoto,
    );

    if (!currentPhotos.some((photo) => photo.id === id)) {
      currentPhotos[id] = currentPhotoInfo;
    }

    onChange(currentPhotos);
  }

  function handleDeletePhotoButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const currentPhotos = photos.filter((prevPhoto) => prevPhoto.id !== id);
    onChange(currentPhotos);
  }

  return (
    <PhotoUploaderSlotWrapper>
      {/**
       * TODO: input 의 file 을 업로드할 때, htmlFor, id 에 고유한 값을 넣어주어야 합니다.
       * 중복된 id 의 경우, input 의 file 을 업로드할 때 같은 id 의 input 을 찾아서 업로드하기 때문입니다.
       */}
      <PhotoUploaderSlotLabel htmlFor={`file-upload-${id}`}>
        {!photo && (
          <Image width={24} height={24} src={CameraIcon} alt="camera" />
        )}
        {photo && (
          <>
            <Image fill alt="photo" src={URL.createObjectURL(photo.file)} />
            <Button
              sx={{
                width: '24px',
                height: '24px',
                position: 'absolute',
                right: '4px',
                top: '4px',
                cursor: 'pointer',
              }}
              onClick={handleDeletePhotoButtonClick}
            >
              <Image alt="photo close" src={CloseIcon} />
            </Button>
          </>
        )}
      </PhotoUploaderSlotLabel>
      <Input
        type="file"
        id={`file-upload-${id}`}
        style={{ display: 'none' }}
        inputProps={{ accept: 'image/*' }}
        onChange={handleInputChange}
      />
    </PhotoUploaderSlotWrapper>
  );
}

const PhotoUploaderSlotWrapper = styled(Box)({
  width: '131px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  border: '1px solid #6C757D',
  cursor: 'pointer',
  overflow: 'hidden',
});

const PhotoUploaderSlotLabel = styled('label')({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});
