import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { StoreCard } from '@/components/StoreSearch/StoreCard';
import { STORES } from '@/common/fixtures/store';

export default function StoreSearch() {
  return (
    <>
      <Head>
        <title>Cakey Store Search</title>
        <meta name="description" content="store search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          marginTop: '40px',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        {STORES.length > 0 && (
          <Box sx={{ width: '496px', textAlign: 'left' }}>
            <Typography
              sx={{ fontWeight: 500, letterSpacing: '0.1px', color: '#78767A' }}
            >
              총 {STORES.length}개
            </Typography>
          </Box>
        )}
        {STORES.map((store) => (
          <StoreCard key={store.id} {...store} />
        ))}
      </Box>
    </>
  );
}
