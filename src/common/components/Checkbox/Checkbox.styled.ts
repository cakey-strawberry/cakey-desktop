import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const CustomCheckbox = styled(Checkbox)({
  color: '#495057',
  borderRadius: '2px',

  // NOTE: Checkbox에서 ㅁ 아이콘에 적용된 스타일
  '& .MuiSvgIcon-root': {
    width: '24px',
    height: '24px',
  },

  // NOTE: Checkbox에서 V 표시(체크 표시)를 제외한 나머지를 채우고 있는 배경색
  '&.Mui-checked': {
    color: '#FF5775',
  },
});

export default CustomCheckbox;
