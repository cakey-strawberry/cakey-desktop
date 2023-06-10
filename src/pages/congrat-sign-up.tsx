import { useRouter } from 'next/navigation';

import { Congratulation } from '@/common/components/Congratulation';

export default function CongratSignUp() {
  const router = useRouter();

  function handleButtonClick() {
    router.push('/');
  }

  return (
    <Congratulation
      title="진심으로 환영합니다!"
      subtitle="가입이 완료 되었어요."
      buttonText="로그인하기"
      onButtonClick={handleButtonClick}
      sx={{
        marginTop: '60px',
      }}
    />
  );
}
