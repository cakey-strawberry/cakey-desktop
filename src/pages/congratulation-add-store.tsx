import { useRouter } from 'next/navigation';

import { CongratulationCard } from '@/components/Misc/CongratulationCard';

export default function CongratulationSignUp() {
  const router = useRouter();

  function handleButtonClick() {
    router.push('/');
  }

  return (
    <CongratulationCard
      title="스토어 등록을 완료하였습니다!"
      subtitle="스토어 검토 후 등록이 완료됩니다."
      buttonText="메인으로"
      onButtonClick={handleButtonClick}
      sx={{
        marginTop: '60px',
      }}
    />
  );
}
