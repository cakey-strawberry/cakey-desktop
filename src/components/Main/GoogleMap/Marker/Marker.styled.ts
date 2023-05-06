import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import type { MarkerStatus } from './Marker.types';

type MarkerBorderStatus = MarkerStatus | 'selected';

function getBorderColorOfMarker(status: MarkerBorderStatus) {
  switch (status) {
    case 'default':
      return '#111111';
    case 'bookmark':
      return '#fc7189';
    case 'selected':
      return '#ff5775';
  }
}

export const MarkerWrapper = styled(Box, {
  shouldForwardProp: (prop: string) => !['status'].includes(prop),
})<{ status: MarkerBorderStatus }>(({ status }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  border: `2px solid ${getBorderColorOfMarker(status)}`,
  borderRadius: '50%',
  backgroundColor: '#ffffff',

  // Marker Tail css - background
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '30px',
    bottom: '-14px',
    borderTop: '8px solid #ffffff',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '8px solid transparent',
  },

  // Marker Tail css - border
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '30px',
    bottom: '-17px',
    borderTop: `8px solid ${getBorderColorOfMarker(status)}`,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '8px solid transparent',
  },
}));

export const SelectedMarkerInnerWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  backgroundColor: 'rgb(255, 87, 117, 0.7)',
});

export const SelectedMarkerOuterWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  backgroundColor: 'rgb(255, 87, 117, 0.3)',
});

export const MarkerImageWrapper = styled(Box)({
  position: 'relative',
  width: '68px',
  height: '68px',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const BookmarkIconWrapper = styled(Box)({
  position: 'absolute',
  top: '0%',
  right: '0%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '22px',
  height: '22px',
  backgroundColor: '#FF5775',
  borderRadius: '50%',
  overflow: 'hidden',
});
