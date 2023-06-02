import Box from '@mui/material/Box';

import { Header } from '@/common/components/Header';

import type { ReactNode } from 'react';

type LayoutProps = {
  children?: ReactNode;
  onUserProfileClick: () => void;
};

export default function Layout({ children, onUserProfileClick }: LayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: '#efefef',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minWidth: '1400px',
          width: '73%',
          height: '98%',
          padding: '24px',
          paddingTop: 0,
          borderRadius: '24px',
          backgroundColor: '#ffffff',
          boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Header onUserProfileClick={onUserProfileClick} />
        <Box sx={{ flex: 1, height: '100%', overflow: 'hidden' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
