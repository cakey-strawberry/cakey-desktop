import Link from 'next/link';
import Router from 'next/router';

import Search from '@/common/components/Search';
import { NeedSignUpModal } from '@/components/Auth/NeedSignUpModal';

import { useModal } from '@/common/hooks/useModal';

import '@/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const { isOpen, openModal, closeModal } = useModal();

  function handleUserProfileClick() {
    if (process.env.NEXT_PUBLIC_USER_LOGIN === 'true') {
      Router.push('/user-profile');
    } else {
      openModal();
    }
  }

  return (
    <>
      <header className="header">
        <div className="left_header">
          <Link href="/">Logo</Link>
          <Search
            onSearch={() => Router.push('/store-search')}
            placeholder="스토어 검색"
          />
        </div>
        <div className="right_header">
          <Link href="/add-store" className="button">
            스토어 추가
          </Link>
          <Link href="/bookmarked-stores" className="button">
            북마크
          </Link>
          <button onClick={handleUserProfileClick} className="button">
            유저 프로필
          </button>
        </div>
      </header>
      <main className="main">
        <Component {...pageProps} />
        {isOpen && <NeedSignUpModal onCloseButtonClick={closeModal} />}
      </main>
    </>
  );
}
