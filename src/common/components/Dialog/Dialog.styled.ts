import { styled } from '@mui/material';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';

export const CustomDialog = styled(MuiDialog)({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',

  '& .MuiPaper-root': {
    minWidth: '312px',
    padding: '24px',
    borderRadius: '28px',
  },
});

export const CustomDialogTitle = styled(MuiDialogTitle)({
  padding: 0,
  margin: '16px 0',
});

export const CustomDialogContent = styled(MuiDialogContent)({
  padding: 0,
  marginBottom: '16px',
  fontWeight: 400,
});

export const CustomDialogActions = styled(MuiDialogActions)({
  padding: 0,
});
