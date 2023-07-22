import Image from 'next/image';
import {
  styled,
  Box,
  Typography,
  ToggleButton,
  TextField,
  Divider,
} from '@mui/material';

import { Checkbox } from '@/common/components/Checkbox';
import { Button } from '@/common/components/Button';
import TimeRangeIcon from '@/common/assets/icons/time-range.svg';
import HoursPlusIcon from '@/common/assets/icons/opening-hours-plus.svg';
import HoursDeleteIcon from '@/common/assets/icons/opening-hours-delete.svg';

const dayTextList = ['월', '화', '수', '목', '금', '토', '일'];

export default function OpeningHoursSection() {
  return (
    <OpeningHoursSectionWrapper>
      <OpeningHoursSectionTitleWrapper>
        <OpeningHoursSectionTitle>영업시간</OpeningHoursSectionTitle>
      </OpeningHoursSectionTitleWrapper>
      <OpeningHoursContent>
        <OpeningHoursSelector>
          <OpeningHoursDayList>
            {dayTextList.map((day, index) => {
              return (
                <OpeningHoursDayButton value={day} key={index}>
                  <OpeningHoursDayButtonText>{day}</OpeningHoursDayButtonText>
                </OpeningHoursDayButton>
              );
            })}
          </OpeningHoursDayList>
          <OpeningHoursTimeRange>
            <OpeningHoursTime
              placeholder="09:00"
              fullWidth
              autoComplete="off"
            />
            <Image
              src={TimeRangeIcon}
              alt="time range icon"
              width={24}
              height={24}
            />
            <OpeningHoursTime
              placeholder="18:00"
              fullWidth
              autoComplete="off"
            />
          </OpeningHoursTimeRange>
          <ClosedDayCheckboxWrapper>
            <Checkbox
              sx={{
                width: '24px',
                height: '24px',
              }}
            />
            <ClosedDayCheckboxLabelText>휴무일 지정</ClosedDayCheckboxLabelText>
          </ClosedDayCheckboxWrapper>
          <OpeningHoursAddButton>
            <OpeningHoursAddButtonTextWrapper>
              <Image
                src={HoursPlusIcon}
                alt="opening hours add icon"
                width={24}
                height={24}
              />
              <OpeningHoursAddButtonText>
                영업시간 추가
              </OpeningHoursAddButtonText>
            </OpeningHoursAddButtonTextWrapper>
          </OpeningHoursAddButton>
        </OpeningHoursSelector>
        <Divider
          sx={{
            bgcolor: '#E9ECEF',
            width: '400px',
          }}
        />
        <OpeningHoursList>
          <OpeningHoursItem>
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                height: '24px',
              }}
            >
              <OpeningHoursItemDays>
                월 &middot; 화 &middot; 수
              </OpeningHoursItemDays>
              <OpeningHoursItemTime>09:00 - 18:00</OpeningHoursItemTime>
            </Box>
            <Button sx={{ padding: '0px' }}>
              <Image
                src={HoursDeleteIcon}
                alt="opening hours delete icon"
                width={24}
                height={24}
              />
            </Button>
          </OpeningHoursItem>
          <OpeningHoursItem>
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                height: '24px',
              }}
            >
              <OpeningHoursItemDays>
                목 &middot; 금
              </OpeningHoursItemDays>
              <OpeningHoursItemClosedDay>휴무</OpeningHoursItemClosedDay>
            </Box>
            <Button sx={{ padding: '0px' }}>
              <Image
                src={HoursDeleteIcon}
                alt="opening hours delete icon"
                width={24}
                height={24}
              />
            </Button>
          </OpeningHoursItem>
        </OpeningHoursList>
      </OpeningHoursContent>
    </OpeningHoursSectionWrapper>
  );
}

const OpeningHoursSectionWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: '40px',
});

const OpeningHoursSectionTitleWrapper = styled(Box)({
  display: 'flex',
  width: '400px',
  gap: '4px',
});

const OpeningHoursSectionTitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.15px',
  /**
   * TODO: 글자색이 배경색과 동일한 색으로 적용되어 글자가 안보이는 현상있어 일단 명시적으로 텍스트 색깔 적용
   * 전체적으로 default color 토큰 지정하는 작업 후 제거하기
   */
  color: '#111',
});

const OpeningHoursContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
});

const OpeningHoursSelector = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
});

const OpeningHoursDayList = styled(Box)({
  display: 'flex',
  width: '400px',
  alignItems: 'center',
  gap: '4px',
});

const OpeningHoursDayButton = styled(ToggleButton)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  border: 'none',
  borderRadius: '8px',
  background: '#F8F9FA',
});

const OpeningHoursDayButtonText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  color: '#6C757D',
  textAlign: 'center',
});

const OpeningHoursTimeRange = styled(Box)({
  display: 'flex',
  width: '400px',
  alignItems: 'center',
  gap: '12px',
});

// TODO: 다른 시간 선택 컴포넌트로 대체될 때 해당 styled 컴포넌트 제거
const OpeningHoursTime = styled(TextField)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '400px',
  height: '56px',

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
    '&.Mui-disabled fieldset': {
      border: '1px solid #E9ECEF',
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
});

const ClosedDayCheckboxWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  width: '400px',
  height: '40px',
});

const ClosedDayCheckboxLabelText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: 'normal',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.25px',
  color: '#6C757D',
});

const OpeningHoursAddButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  padding: '0px',
  gap: '8px',
  borderRadius: '100px',
  border: '1px solid #FF99AB',
  width: '400px',
  height: '40px',
});

const OpeningHoursAddButtonTextWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 24px 10px 16px',
  gap: '8px',
});

const OpeningHoursAddButtonText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.1px',
  color: '#FF5775',
  textAlign: 'center',
});

const OpeningHoursList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
});

const OpeningHoursItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '400px',
  gap: '8px',
});

const OpeningHoursItemDays = styled(Typography)({
  alignSelf: 'center',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.1px',
  color: '#495057',
});

const OpeningHoursItemTime = styled(Typography)({
  alignSelf: 'center',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.15px',
});

const OpeningHoursItemClosedDay = styled(Typography)({
  alignSelf: 'center',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.15px',
  color: '#FF5716',
});
