import Head from 'next/head';
import Box from '@mui/material/Box';

import { useModal } from '@/common/hooks/useModal';
import { Store } from '@/components/Main/Store';
import { GoogleMap } from '@/components/Main/GoogleMap';
import { ReviewWriteModal } from '@/components/Main/ReviewWriteModal';

export default function StoreMap() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <Head>
        <title>Cakey Store Map</title>
        <meta name="description" content="See the store and map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Store onReviewWriteButtonClick={openModal} />
        <GoogleMap />
        <ReviewWriteModal isOpen={isOpen} onCloseButtonClick={closeModal} />
      </Box>
    </>
  );
}
