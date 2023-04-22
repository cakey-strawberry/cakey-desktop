import { useRouter } from 'next/navigation';

import { Layout } from '@/common/components/Layout';
import { LoginModal } from '@/components/Auth/LoginModal';

import { useModal } from '@/common/hooks/useModal';

import '@/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { isOpen, openModal, closeModal } = useModal();

  function handleUserProfileClick() {
    if (process.env.NEXT_PUBLIC_USER_LOGIN === 'true') {
      router.push('/user-profile');
    } else {
      openModal();
    }
  }

  return (
    <>
      <Layout onUserProfileClick={handleUserProfileClick}>
        <Component {...pageProps} />
        {isOpen && <LoginModal onCloseButtonClick={closeModal} />}
      </Layout>
    </>
  );
}
