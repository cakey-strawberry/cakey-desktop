import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CloseIcon from '@/common/assets/icons/close.svg';

import {
  CustomDialog,
  CustomDialogTitle,
  CustomDialogContent,
  CustomDialogActions,
} from './Dialog.styled';

import type { DialogProps } from '@mui/material/Dialog';

type DialogWrapperProps = DialogProps & {
  // this is the only way to override the width of the dialog
  width?: string;
  headerText?: string;
};

function DialogWrapper({
  width,
  onClose,
  headerText,
  children,
  ...args
}: DialogWrapperProps) {
  function handleClose(event: React.SyntheticEvent) {
    if (!onClose) return;

    onClose(event, 'backdropClick');
  }

  return (
    <CustomDialog sx={{ '& .MuiPaper-root': { width: width } }} {...args}>
      <Box
        sx={{
          width: '100%',
          height: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '16px',
        }}
      >
        {headerText && (
          <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>
            {headerText}
          </Typography>
        )}
        <Button
          onClick={handleClose}
          sx={{
            minWidth: 0,
            width: '24px',
            height: '24px',
            position: 'absolute',
            right: 0,
          }}
        >
          <Image src={CloseIcon} alt="close" />
        </Button>
      </Box>
      {children}
    </CustomDialog>
  );
}

const Dialog = {
  Wrapper: DialogWrapper,
  Title: CustomDialogTitle,
  Content: CustomDialogContent,
  Actions: CustomDialogActions,
};

export default Dialog;
