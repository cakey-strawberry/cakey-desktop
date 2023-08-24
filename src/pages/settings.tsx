import { useRouter } from 'next/navigation';
import { styled, Box, Typography } from '@mui/material';

import { Button } from '@/common/components/Button';

export default function Settings() {
  const router = useRouter();

  // TODO: 각 버튼에 맞는 기능 추가(로그아웃)
  function handleLogoutButtonClick() {
    router.push('/');
  }

  // TODO: 각 버튼에 맞는 기능 추가(탈퇴)
  function handleDeleteAccountButtonClick() {
    router.push('/');
  }

  return (
    <>
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>설정</PageHeaderText>
        </PageHeader>
        <PageContent>
          <VersionInfoWrapper>
            <VersionLabel>버전</VersionLabel>
            <VersionNumber>v.1.0</VersionNumber>
          </VersionInfoWrapper>
          <LogoutButton onClick={handleLogoutButtonClick}>
            <LogoutButtonText>로그아웃</LogoutButtonText>
          </LogoutButton>
          <DeleteAccountButton onClick={handleDeleteAccountButtonClick}>
            <DeleteAccountButtonText>탈퇴하기</DeleteAccountButtonText>
          </DeleteAccountButton>
        </PageContent>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  position: 'absolute',
  width: '400px',
  left: '500px',
  top: '148px',
});

const PageHeader = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
});

const PageHeaderText = styled(Box)({
  color: '#111111',
  fontFamily: 'Pretendard',
  fontSize: '28px',
  fontWeight: 700,
  lineHeight: '36px',
});

const PageContent = styled(Box)({
  display: 'flex',
  width: '400px',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const VersionInfoWrapper = styled(Box)({
  display: 'flex',
  width: '400px',
  padding: '24px 0px',
  alignItems: 'flex-start',
  borderBottom: '1px solid #E9ECEF',
});

const VersionLabel = styled(Typography)({
  display: 'flex',
  height: '24px',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 0',
  color: '#343A40',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  letterSpacing: '0.1px',
});

const VersionNumber = styled(Typography)({
  flex: '1 0 0',
  color: '#FF5775',
  textAlign: 'right',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  letterSpacing: '0.15px',
});

const LogoutButton = styled(Button)({
  display: 'flex',
  width: '400px',
  padding: '24px 0px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderBottom: '1px solid #E9ECEF',
});

const LogoutButtonText = styled(Typography)({
  display: 'flex',
  height: '24px',
  flexDirection: 'column',
  justifyContent: 'center',
  color: '#343A40',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  letterSpacing: '0.1px',
});

const DeleteAccountButton = styled(Button)({
  display: 'flex',
  width: '400px',
  padding: '24px 0px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderBottom: '1px solid #E9ECEF',
});

const DeleteAccountButtonText = styled(Typography)({
  display: 'flex',
  height: '24px',
  flexDirection: 'column',
  justifyContent: 'center',
  color: '#ADB5BD',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  letterSpacing: '0.1px',
});
