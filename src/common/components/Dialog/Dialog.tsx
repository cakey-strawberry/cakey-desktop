import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
};

function DialogWrapper(props: DialogWrapperProps) {
  function handleClose(event: React.SyntheticEvent) {
    if (!props.onClose) return;

    props.onClose(event, 'backdropClick');
  }

  return (
    <CustomDialog
      sx={{ '& .MuiPaper-root': { width: props.width } }}
      {...props}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          onClick={handleClose}
          sx={{ minWidth: 0, width: '24px', height: '24px' }}
        >
          <Image src={CloseIcon} alt="close" />
        </Button>
      </Box>
      {props.children}
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
