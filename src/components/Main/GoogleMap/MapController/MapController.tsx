import Box from '@mui/material/Box';
import Image from 'next/image';

import { Button } from '@/common/components/Button';

import CloseUpIcon from '@/common/assets/icons/close-up.svg';
import LocationIcon from '@/common/assets/icons/location.svg';
import CloseDownIcon from '@/common/assets/icons/close-down.svg';

type MapControllerProps = {
  onCloseUpClick: () => void;
  onCloseDownClick: () => void;
  onCurrentLocationClick: () => void;
};

function MapController({
  onCloseUpClick,
  onCloseDownClick,
  onCurrentLocationClick,
}: MapControllerProps) {
  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '40px',
        right: '24px',
        bottom: '24px',
      }}
    >
      <Button
        sx={{
          width: '40px',
          height: '40px',
          marginBottom: '24px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          border: '1px solid #CED4DA',
        }}
        onClick={onCurrentLocationClick}
      >
        <Image src={LocationIcon} alt="location" width={24} height={24} />
      </Button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '40px',
          padding: '8px',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          border: '1px solid #CED4DA',
          borderRadius: '40px',
        }}
      >
        <Button
          sx={{
            padding: 0,
            overflow: 'hidden',
          }}
          onClick={onCloseUpClick}
        >
          <Image src={CloseUpIcon} alt="location" width={24} height={24} />
        </Button>
        <Box
          sx={{
            width: '100%',
            height: '1px',
            backgroundColor: '#E9ECEF',
            margin: '8px 0',
          }}
        />
        <Button
          sx={{ padding: 0, borderRadius: '50%', overflow: 'hidden' }}
          onClick={onCloseDownClick}
        >
          <Image src={CloseDownIcon} alt="location" width={24} height={24} />
        </Button>
      </Box>
    </Box>
  );
}

export default MapController;
