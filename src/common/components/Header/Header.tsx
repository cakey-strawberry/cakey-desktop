import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import { Search } from '@/common/components/Search';

import LogoIcon from '@/common/assets/icons/logo.svg';
import UserIcon from '@/common/assets/icons/user.svg';
import StarIcon from '@/common/assets/icons/star.svg';

type HeaderProps = {
  onUserProfileClick: () => void;
};

export default function Header({ onUserProfileClick }: HeaderProps) {
  const router = useRouter();

  return (
    <AppBar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '5.5rem',
        position: 'static',
        background: '#ffffff',
        boxShadow: 'none',
        transition: 'none',
      }}
    >
      <Link href="/">
        <Image src={LogoIcon} alt="logo" />
      </Link>
      <Search
        onSearch={() => router.push('/store-search')}
        placeholder="‘케이크 맛집’을 검색해보세요!"
      />
      <Box sx={{ display: 'flex' }}>
        <Link
          href="/add-store"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px',
            backgroundColor: '#303034',
            borderRadius: '30px',
            padding: '10px',
            marginRight: '4px',
          }}
        >
          <Image
            style={{ marginRight: '4px' }}
            width={24}
            height={24}
            src={StarIcon}
            alt="user"
          />
          스토어 추가
        </Link>
        <Link
          href="/bookmarked-stores"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            backgroundColor: '#303034',
            borderRadius: '50%',
            marginRight: '4px',
          }}
        >
          <Image width={24} height={24} src={StarIcon} alt="user" />
        </Link>
        <Button
          sx={{
            minWidth: 0,
            width: '40px',
            height: '40px',
            backgroundColor: '#303034',
            borderRadius: '50%',
          }}
          onClick={onUserProfileClick}
        >
          <Image width={24} height={24} src={UserIcon} alt="user" />
        </Button>
      </Box>
    </AppBar>
  );
}
