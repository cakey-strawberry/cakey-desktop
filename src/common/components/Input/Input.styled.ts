import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const CustomTextField = styled(TextField)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '400px',
  height: '56px',
  marginBottom: '40px',

  // NOTE: TextField의 'input 영역 + 아이콘 영역'을 감싸고 있는 div에 적용된 스타일
  '& .MuiInputBase-root': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 0px 8px 16px',
  },

  // NOTE: TextField의 'input 영역 + 아이콘 영역'을 감싸고 있는 div의 테두리에 적용된 스타일
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6C757D',
    },
    '&:hover fieldset': {
      border: '2px solid #111111',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #111111',
    },
  },
  '& .MuiOutlinedInput-root.Mui-error': {
    '& fieldset': {
      border: '2px solid #FF5716',
    },
    '&:hover fieldset': {
      border: '2px solid #FF5716',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #FF5716',
    },
  },

  // NOTE: TextField의 'input 영역(아이콘 영역을 제외한 영역)'에 적용된 스타일
  '& .MuiInputBase-input': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    isolation: 'isolate',
    width: '336px',
    height: '40px',

    fontFamily: 'Pretendard',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.5px',

    color: '#6C757D',
  },
  '& .Mui-focused .MuiInputBase-input': {
    color: '#111111',
  },
  '& .Mui-error .MuiInputBase-input': {
    color: '#FF5716',
  },

  // NOTE: TextField의 'label 영역(테두리 위쪽에 걸쳐있는 작은 텍스트)'에 적용된 스타일
  '& .MuiFormLabel-root': {
    paddingLeft: '5px',
    width: 'auto',
    color: '#6C757D',
  },
  '&:hover .MuiFormLabel-root': {
    color: '#111111',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: '#111111',
  },
  '& .MuiFormLabel-root.Mui-error': {
    color: '#FF5716',
  },

  // NOTE: TextField의 'helperText 영역(테두리 하단에 표시되는 영역)'에 적용된 스타일
  '& .MuiFormHelperText-root': {
    color: '#6C757D',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: '#FF5716',
  },
});
