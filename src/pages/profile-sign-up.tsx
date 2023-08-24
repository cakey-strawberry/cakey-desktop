import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

import { NicknameInput } from '@/components/Auth/NicknameInput';
import { ProfileImage } from '@/components/Auth/ProfileImage';
import { NextButton } from '@/components/Auth/NextButton';
import LogoCakeIcon from '@/common/assets/icons/logo-cake.svg';

export type FormValues = {
  profileImage: File | null;
  nickname: string;
};

export default function ProfileSignUp() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const router = useRouter();

  function onSubmit(formValues: FormValues) {
    // TODO: form value 확인용. api 연결 시 해당 console.log는 제거하기
    console.log(formValues);
    router.push('/congratulation-sign-up');
  }

  return (
    <>
      <Box
        id="wrapper"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '40px',
          position: 'absolute',
          width: '400px',
          height: '478px',
          left: '500px',
          top: '148px',
        }}
      >
        <Box
          id="header"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '6px',

            width: '300px',
            height: '96px',
          }}
        >
          <Image src={LogoCakeIcon} alt="logo" width={24} height={24} />
          <Typography
            sx={{
              width: '185px',
              height: '36px',
              fontFamily: 'Pretendard',
              fontWeight: 700,
              fontSize: '27px',
              lineHeight: '36px',
              display: 'flex',
              alignItems: 'center',
              color: '#111111',
            }}
          >
            마지막 단계예요!
          </Typography>
          <Typography
            sx={{
              width: '209px',
              height: '24px',
              fontFamily: 'Pretendard',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '0.15px',
              color: '#111111',
            }}
          >
            프로필을 설정해주시면 끝입니다.
          </Typography>
        </Box>
        <Box id="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProfileImage control={control} />
            <NicknameInput
              control={control}
              sx={{
                height: '56px',
                marginBottom: '60px',
              }}
            />
            <NextButton type="submit" text="가입하기" disabled={!isValid} />
          </form>
        </Box>
      </Box>
    </>
  );
}
