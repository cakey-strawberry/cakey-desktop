import Box from '@mui/material/Box';
import { Controller } from 'react-hook-form';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import PhotoUploaderSlot from './PhotoUploaderSlot';

import type { Control } from 'react-hook-form';
import type { Photo, ReviewWriteFormValues } from './hooks/useReviewForm';

type PhotoUploaderProps = {
  control: Control<ReviewWriteFormValues>;
  onChange: (photos: Photo[]) => void;
};

export default function PhotoUploader({
  control,
  onChange,
}: PhotoUploaderProps) {
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
        <Controller
          name="photos"
          control={control}
          render={({ field: { value } }) => (
            <>
              <PhotoUploaderSlot photos={value} id={0} onChange={onChange} />
              <PhotoUploaderSlot photos={value} id={1} onChange={onChange} />
              <PhotoUploaderSlot photos={value} id={2} onChange={onChange} />
            </>
          )}
        />
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
  justifyContent: 'space-between',
  alignItems: 'center',
});
