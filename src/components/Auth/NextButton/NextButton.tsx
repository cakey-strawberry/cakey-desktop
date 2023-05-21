import { Button, Typography } from '@mui/material';

type NextButtonProps = {
  type: 'button' | 'submit';
  text: string;
  disabled: boolean;
  onClick?: () => void;
};

export default function NextButton({
  type,
  text,
  disabled,
  onClick,
}: NextButtonProps) {
  function handleClick() {
    if (type === 'button' && onClick) {
      onClick();
    }
  }

  return (
    <Button
      type={type}
      variant="contained"
      fullWidth
      disabled={disabled}
      onClick={handleClick}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        gap: '8px',
        width: '400px',
        height: '56px',
        background: disabled ? '#E9ECEF' : '#FF5775',
        borderRadius: '100px',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: disabled ? '#E9ECEF' : '#FA3B5E',
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Pretendard',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '24px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          letterSpacing: '0.15px',
          color: disabled ? '#495057' : '#FFFFFF',
          opacity: disabled ? '0.38' : '1',
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}
