import { useRouter } from 'next/navigation';

import Modal from '@/common/components/Modal';

type NeedSignUpModalProps = {
  onCloseButtonClick: () => void;
};

export function NeedSignUpModal({ onCloseButtonClick }: NeedSignUpModalProps) {
  const router = useRouter();

  function handleSocialLoginButtonClick() {
    onCloseButtonClick();
    router.push('/privacy-terms-signup');
  }

  return (
    <Modal buttonText="닫기" onClick={onCloseButtonClick}>
      <div>
        <p>설명</p>
        <button onClick={handleSocialLoginButtonClick}>구글 로그인</button>
        <button onClick={handleSocialLoginButtonClick}>카카오 로그인</button>
      </div>
    </Modal>
  );
}
