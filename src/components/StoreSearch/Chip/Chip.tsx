import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { Chip } from '@/common/components/Chip';
import ThumbUpIcon from '@/common/assets/icons/thumb-up.svg';

import type { CSSProperties } from 'react';

type StoreSearchChipProps = {
  label: string;
  isRecommend: boolean;
};

const recommendChipStyle: CSSProperties = {
  color: '#ffffff',
  backgroundColor: '#FF5775',
  fontSize: '11px',
};

const defaultChipStyle: CSSProperties = {
  height: '24px',
  marginRight: '5px',
  padding: '4px 10px',
  color: '#495057',
  backgroundColor: '#E9ECEF',
  borderRadius: '8px',
};

export function StoreSearchLabelChip({
  label,
  isRecommend,
}: StoreSearchChipProps) {
  return (
    <Chip
      sx={
        isRecommend
          ? { ...defaultChipStyle, ...recommendChipStyle }
          : defaultChipStyle
      }
      label={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '11px', letterSpacing: '0.5px' }}>
            {label}{' '}
          </Typography>{' '}
          {isRecommend && (
            <Image
              style={{ marginLeft: '2px' }}
              src={ThumbUpIcon}
              alt="thumb up"
            />
          )}
        </Box>
      }
    />
  );
}

export function StoreADChip() {
  return (
    <Chip
      sx={{
        height: '24px',
        marginRight: '4px',
        padding: '4px 8px',
        border: '1px solid #E9ECEF',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        fontSize: '11px',
      }}
      label={
        <Typography sx={{ fontSize: '11px', color: '#ADB5BD' }}>AD</Typography>
      }
    />
  );
}
