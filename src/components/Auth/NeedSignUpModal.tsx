import Router from 'next/router';

import Modal from '@/common/components/Modal';

interface NeedSignUpModalProps {
  onCloseButtonClick: () => void;
}

export function NeedSignUpModal({ onCloseButtonClick }: NeedSignUpModalProps) {
  function handleSocialLoginButtonClick() {
    onCloseButtonClick();
    Router.push('/privacy-terms-signup');
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
