import Head from 'next/head';
import Box from '@mui/material/Box';

import { Store } from '@/components/StoreSearch/Store';
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
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        {STORES.map((store) => (
          <Store key={store.id} {...store} />
        ))}
      </Box>
    </>
  );
}
