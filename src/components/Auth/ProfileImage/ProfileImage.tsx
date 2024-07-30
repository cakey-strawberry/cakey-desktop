import { useRef } from 'react';
import { Controller } from 'react-hook-form';
import { Box, Avatar, Badge, IconButton } from '@mui/material';
import Image from 'next/image';

import CameraIcon from '@/common/assets/icons/camera.svg';
import DefaultProfileImage from '@/common/assets/icons/default-profile.svg';

import type { Control } from 'react-hook-form';
import type { FormValues } from '@/pages/profile-sign-up';

type ProfileImageProps = {
  control: Control<FormValues>;
};

export default function ProfileImage({ control }: ProfileImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      name="profileImage"
      control={control}
      render={({ field }) => {
        function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
          const file = event.target.files && event.target.files[0];

          if (file) {
            const fileReader = new FileReader();

            fileReader.onload = (event: ProgressEvent<FileReader>) => {
              if (event.target?.readyState === FileReader.DONE) {
                field.onChange(event.target.result);
              }
            };

            fileReader.readAsDataURL(file);
          } else {
            field.onChange(null);
          }
        }

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <input
              ref={fileInputRef}
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <IconButton onClick={() => fileInputRef.current?.click()}>
                  <Image src={CameraIcon} alt="camera" width={40} height={40} />
                </IconButton>
              }
            >
              <Avatar
                alt="유저 프로필 사진"
                sx={{
                  width: 150,
                  height: 150,
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                {field.value ? (
                  <Image src={field.value} alt="추가한 프로필 이미지" fill />
                ) : (
                  <Image
                    src={DefaultProfileImage}
                    alt="기본 프로필 이미지"
                    fill
                  />
                )}
              </Avatar>
            </Badge>
          </Box>
        );
      }}
    />
  );
}
