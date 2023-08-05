import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

import { NicknameInput } from '@/components/Auth/NicknameInput';
import { ProfileImage } from '@/components/Auth/ProfileImage';
import { NextButton } from '@/components/Auth/NextButton';

export type FormValues = {
  profileImage: File | null;
  nickname: string;
};

export default function UserProfile() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    // TODO: 서버에서 비동기로 유저 데이터를 받아와서 defaultProfileImageURL, defaultNickname 설정하기
    defaultValues: {
      nickname: '케이키',
    },
  });
  const router = useRouter();

  function onSubmit(formValues: FormValues) {
    // TODO: form value 확인용. api 연결 시 해당 console.log는 제거하기
    console.log(formValues);
    router.push('/');
  }

  return (
    <>
      <Box
        id="wrapper"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          position: 'absolute',
          width: '400px',
          left: '500px',
          top: '275px',
        }}
      >
        <Box
          id="header"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Typography
            sx={{
              color: '#111111',
              fontFamily: 'Pretendard',
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: '36px',
            }}
          >
            프로필
          </Typography>
        </Box>
        <Box id="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProfileImage control={control} />
            <NicknameInput
              control={control}
              sx={{
                height: '56px',
                marginBottom: '40px',
              }}
            />
            <NextButton type="submit" text="수정하기" disabled={!isValid} />
          </form>
        </Box>
      </Box>
    </>
  );
}
