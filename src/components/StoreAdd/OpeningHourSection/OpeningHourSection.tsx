import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  styled,
  Box,
  Typography,
  ToggleButton,
  Divider,
} from '@mui/material';

import { Checkbox } from '@/common/components/Checkbox';
import { Button } from '@/common/components/Button';
import TimeRangeIcon from '@/common/assets/icons/time-range.svg';
import OpeningHourPlusIcon from '@/common/assets/icons/opening-hour-plus.svg';
import DisabledOpeningHourPlusIcon
  from '@/common/assets/icons/disabled-opening-hour-plus.svg';
import OpeningHourDeleteIcon
  from '@/common/assets/icons/opening-hour-delete.svg';

import { DEFAULT_DAYS } from './day';

import type { Day } from './day';

const MIDDLE_DOT = '·';

// TODO: api 적용할 때 영업시간을 추가하고 제거하는 로직 상위로 올리기 (hook)
export default function OpeningHourSection() {
  const [days, setDays] = useState<Day[]>(DEFAULT_DAYS);
  const [openHour, setOpenHour] = useState<string>('');
  const [closeHour, setCloseHour] = useState<string>('');
  const [isClosedDay, setIsClosedDay] = useState<boolean>(false);
  const [isAddButtonActive, setIsAddButtonActive] = useState<boolean>(false);
  const [openingHourList, setOpeningHourList] = useState<Array<{
    id: number;
    days: Day[];
    openHour: string;
    closeHour: string;
    isClosedDay: boolean;
  }>>([]);

  const openHourInputRef = useRef<HTMLInputElement>(null);
  const closeHourInputRef = useRef<HTMLInputElement>(null);

  function handleDayToggle(dayId: number) {
    setDays((prevDays) => {
      return prevDays.map((day) => {
        if (day.id === dayId) {
          return { ...day, isSelected: !day.isSelected };
        } else {
          return day;
        }
      });
    });
  }

  function handleOpenHourInputClick() {
    openHourInputRef.current?.showPicker();
  }
  function handleOpenHourChange(event: React.ChangeEvent<HTMLInputElement>) {
    setOpenHour(event.target.value);
  }

  function handleCloseHourInputClick() {
    closeHourInputRef.current?.showPicker();
  }
  function handleCloseHourChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCloseHour(event.target.value);
  }

  function handleClosedDayChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsClosedDay(event.target.checked);
  }

  function handleOpeningHourAddButtonClick() {
    const selectedDays = days.filter((day) => day.isSelected);

    setOpeningHourList((prevHourList) => [
      ...prevHourList,
      {
        id: prevHourList.length + 1,
        days: selectedDays,
        openHour,
        closeHour,
        isClosedDay,
      },
    ]);

    setDays((prevDays) => {
      return prevDays.map((day) => {
        if (selectedDays.some((selectedDay) => selectedDay.id === day.id)) {
          return { ...day, isSelected: false, isDisabled: true };
        } else {
          return { ...day, isSelected: false };
        }
      });
    });

    setOpenHour('');
    setCloseHour('');
    setIsClosedDay(false);
  }

  function handleOpeningHourDeleteButtonClick(hourId: number) {
    const openingHourToDelete =
      openingHourList.find((hour) => hour.id === hourId);
    const enabledDayIdList =
      openingHourToDelete ? openingHourToDelete.days.map((day) => day.id) : [];
    const filterdOpeningHourList =
      openingHourList.filter((hour) => hour.id !== hourId);

    setDays((prevDays) => prevDays.map((day) => {
      if (enabledDayIdList.includes(day.id)) {
        return { ...day, isDisabled: false };
      }
      return day;
    }));
    setOpeningHourList(filterdOpeningHourList);
  }

  useEffect(() => {
    const isAnyDaySelected = days.some((day) => day.isSelected);
    const areOpenAndCloseHoursSelected = Boolean(openHour && closeHour);
    const isAddButtonActive =
    isAnyDaySelected && (areOpenAndCloseHoursSelected || isClosedDay);

    setIsAddButtonActive(isAddButtonActive);
  }, [days, openHour, closeHour, isClosedDay]);

  return (
    <OpeningHourSectionWrapper>
      <OpeningHourSectionTitleWrapper>
        <OpeningHourSectionTitle>영업시간</OpeningHourSectionTitle>
      </OpeningHourSectionTitleWrapper>
      <OpeningHourContent>
        <OpeningHourSelector>
          <OpeningHourDayList>
            {days.map((day: Day) => {
              return (
                <OpeningHourDayButton
                  value={day.name}
                  key={day.id}
                  selected={day.isSelected}
                  disabled={day.isDisabled}
                  onChange={() => handleDayToggle(day.id)}
                >
                  <OpeningHourDayButtonText>
                    {day.name}
                  </OpeningHourDayButtonText>
                </OpeningHourDayButton>
              );
            })}
          </OpeningHourDayList>
          <OpeningHourTimeRange>
            <TimeInputBox onClick={handleOpenHourInputClick}>
              {openHour
                ? <TimeInputText>{openHour}</TimeInputText>
                : <TimeInputPlaceholderText>09:00</TimeInputPlaceholderText>
              }
              <HiddenTimeInput
                ref={openHourInputRef}
                type="time"
                value={openHour}
                onChange={handleOpenHourChange}
              />
            </TimeInputBox>
            <Image
              src={TimeRangeIcon}
              alt="time range icon"
              width={24}
              height={24}
            />
            <TimeInputBox onClick={handleCloseHourInputClick}>
              {closeHour
                ? <TimeInputText>{closeHour}</TimeInputText>
                : <TimeInputPlaceholderText>18:00</TimeInputPlaceholderText>
              }
              <HiddenTimeInput
                ref={closeHourInputRef}
                type="time"
                value={closeHour}
                onChange={handleCloseHourChange}
              />
            </TimeInputBox>
          </OpeningHourTimeRange>
          <ClosedDayCheckboxWrapper>
            <Checkbox
              checked={isClosedDay}
              onChange={handleClosedDayChange}
              sx={{
                width: '24px',
                height: '24px',
              }}
            />
            <ClosedDayCheckboxLabelText>휴무일 지정</ClosedDayCheckboxLabelText>
          </ClosedDayCheckboxWrapper>
          <OpeningHourAddButton
            disabled={!isAddButtonActive}
            onClick={handleOpeningHourAddButtonClick}
            sx={{
              border:
                isAddButtonActive ? '1px solid #FF99AB' : '1px solid #E9ECEF',
            }}
          >
            <OpeningHourAddButtonTextWrapper>
              <Image
                src={isAddButtonActive
                  ? OpeningHourPlusIcon : DisabledOpeningHourPlusIcon
                }
                alt="opening hour add icon"
                width={24}
                height={24}
              />
              <OpeningHourAddButtonText
                sx={{
                  color: isAddButtonActive ? '#FF5775' : '#495057',
                  opacity: isAddButtonActive ? 1 : 0.37,
                }}
              >
                영업시간 추가
              </OpeningHourAddButtonText>
            </OpeningHourAddButtonTextWrapper>
          </OpeningHourAddButton>
        </OpeningHourSelector>
        <Divider
          sx={{
            bgcolor: '#E9ECEF',
            width: '400px',
          }}
        />
        <OpeningHourList>
          {openingHourList.map((item) => (
            <OpeningHourItem key={item.id}>
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'space-between',
                  height: '24px',
                }}
              >
                <OpeningHourItemDays>
                  {item.days.map((day) => day.name).join(` ${MIDDLE_DOT} `)}
                </OpeningHourItemDays>
                {item.isClosedDay
                  ? <OpeningHourItemClosedDay>휴무</OpeningHourItemClosedDay> :
                  <OpeningHourItemTime>
                    {item.openHour} - {item.closeHour}
                  </OpeningHourItemTime>
                }
              </Box>
              <Button
                onClick={() => handleOpeningHourDeleteButtonClick(item.id)}
                sx={{ padding: '0px' }}
              >
                <Image
                  src={OpeningHourDeleteIcon}
                  alt="opening hour delete icon"
                  width={24}
                  height={24}
                />
              </Button>
            </OpeningHourItem>
          ))}
        </OpeningHourList>
      </OpeningHourContent>
    </OpeningHourSectionWrapper>
  );
}

const OpeningHourSectionWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: '40px',
});

const OpeningHourSectionTitleWrapper = styled(Box)({
  display: 'flex',
  width: '400px',
  gap: '4px',
});

const OpeningHourSectionTitle = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.15px',
  /**
   * TODO: 글자색이 배경색과 동일한 색으로 적용되어 글자가 안보이는 현상있어 일단 명시적으로 텍스트 색깔 적용
   * 전체적으로 default color 토큰 지정하는 작업 후 제거하기
   */
  color: '#111111',
});

const OpeningHourContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
});

const OpeningHourSelector = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
});

const OpeningHourDayList = styled(Box)({
  display: 'flex',
  width: '400px',
  alignItems: 'center',
  gap: '4px',
});

const OpeningHourDayButton = styled(ToggleButton)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  border: 'none',
  borderRadius: '8px',
  background: '#F8F9FA',

  '&.Mui-selected': {
    border: '1px solid #FA3B5E',
    background: 'rgba(255, 153, 171, 0.20)',

    // NOTE: selected 상태일 때 ToggleButton 내부의 모든 자식 요소에 대한 스타일
    '& > *': {
      color: '#FA3B5E',
    },
  },

  '&:disabled': {
    background: '#FA3B5E',
    color: '#FFFFFF',

    // NOTE: disabled 상태일 때 ToggleButton 내부의 모든 자식 요소에 대한 스타일
    '& > *': {
      color: '#FFFFFF',
    },
  },
});

const OpeningHourDayButtonText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  color: '#6C757D',
  textAlign: 'center',
});

const OpeningHourTimeRange = styled(Box)({
  display: 'flex',
  width: '400px',
  alignItems: 'center',
  gap: '12px',
});

const TimeInputBox = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0px 8px 16px',
  width: '176px',
  height: '56px',
  border: '1px solid #6C757D',
  borderRadius: '4px',
  cursor: 'pointer',

  '&:hover': {
    border: '2px solid #111111',
  },
});

const TimeInputText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.5px',
  color: '#111111',
});

const TimeInputPlaceholderText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.5px',
  color: '#ADB5BD',
});

const HiddenTimeInput = styled('input')({
  opacity: 0,
  position: 'absolute',
  height: '1px',
  width: '1px',
  top: '100%',
  left: '0%',
  pointerEvents: 'none',
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

const OpeningHourAddButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  padding: '0px',
  gap: '8px',
  borderRadius: '100px',
  width: '400px',
  height: '40px',
});

const OpeningHourAddButtonTextWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 24px 10px 16px',
  gap: '8px',
});

const OpeningHourAddButtonText = styled(Typography)({
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.1px',
  textAlign: 'center',
});

const OpeningHourList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
});

const OpeningHourItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '400px',
  gap: '8px',
});

const OpeningHourItemDays = styled(Typography)({
  alignSelf: 'center',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.1px',
  color: '#495057',
});

const OpeningHourItemTime = styled(Typography)({
  alignSelf: 'center',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.15px',
});

const OpeningHourItemClosedDay = styled(Typography)({
  alignSelf: 'center',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '0.15px',
  color: '#FF5716',
});
