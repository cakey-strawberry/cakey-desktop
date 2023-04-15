import { styled } from '@mui/material';
import MuiChip from '@mui/material/Chip';

const CustomChip = styled(MuiChip)({
  height: '32px',
  padding: '6px 12px',
  borderRadius: '8px',
  fontWeight: 500,

  '& .MuiChip-avatar': {
    width: '18px',
    height: '18px',
    marginLeft: 0,
    marginRight: '8px',
  },
  '& .MuiChip-label': {
    padding: 0,
  },
});

export default CustomChip;
