import Link from 'next/link';
import Router from 'next/router';

import Search from '@/common/components/Search';

interface HeaderProps {
  onUserProfileClick: () => void;
}

export default function Header({ onUserProfileClick }: HeaderProps) {
  return (
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
        <button onClick={onUserProfileClick} className="button">
          유저 프로필
        </button>
      </div>
    </header>
  );
}
