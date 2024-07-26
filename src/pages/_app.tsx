import '@/styles/globals.css';

import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Layout } from '@/common/components/Layout';
import { NeedSignUpModal } from '@/components/Auth/NeedSignUpModal';
import { useModal } from '@/common/hooks/useModal';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <Layout onUserProfileClick={handleUserProfileClick}>
          <Component {...pageProps} />
          {isOpen && <NeedSignUpModal onCloseButtonClick={closeModal} />}
        </Layout>
      </QueryClientProvider>
    </>
  );
}
