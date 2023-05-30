import React, { useState } from 'react';
import Image from 'next/image';
import { Controller } from 'react-hook-form';
import { Box, Collapse, Typography } from '@mui/material';

import { Checkbox } from '@/common/components/Checkbox';
import { Button } from '@/common/components/Button';
import UpArrowIcon from '@/common/assets/icons/up-arrow.svg';
import DownArrowIcon from '@/common/assets/icons/down-arrow.svg';

import type { Control } from 'react-hook-form';
import type { FormValues } from '@/pages/privacy-terms-sign-up';

// TODO: 이용약관 데이터를 어떻게 받을지 협의 필요. 이용약관 데이터를 props로 받을 경우 details 속성 추가할 수도 있음
type TermsProps = {
  name: keyof FormValues,
  title: string,
  isRequired: boolean,
  control: Control<FormValues>,
};

export default function Terms({
  name,
  title,
  isRequired,
  control,
}: TermsProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  function handleDetailsButtonClick() {
    setIsDetailsOpen(!isDetailsOpen);
  }

  // TODO: 이용약관 영역과 관련된 레이아웃 구조 협의 이후, sx로 적용된 스타일 영역을 Terms.styled로 분리할 예정임
  return (
    <Box
      id="terms-wrapper"
      sx={{
        // NOTE: 이용약관 세부사항을 영역이 차지하는 부분으로 인해 justifyContent, flexWrap 스타일 추가 적용
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '8px',
        flexWrap: 'wrap',
        width: '400px',
        height: '48px',
      }}
    >
      <Box
        id="terms-title-wrapper"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '4px',
          width: '352px',
          height: '48px',
        }}
      >
        <Box
          id="terms-title"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '4px',
            width: '235px',
            height: '24px',
          }}
        >
          <Typography
            sx={{
              width: '135px',
              height: '24px',
              fontFamily: 'Pretendard',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '0.15px',
              color: '#111111',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Pretendard',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '20px',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '0.1px',
              color: '#6C757D',
            }}
          >
            {isRequired ? '(필수)' : '(선택)'}
          </Typography>
        </Box>
        <Button
          onClick={handleDetailsButtonClick}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '0px',
            width: '81px',
            height: '20px',
          }}
        >
          <Typography
            sx={{
              width: '61px',
              height: '20px',
              fontFamily: 'Pretendard',
              fontWeight: '500',
              fontSize: '13px',
              lineHeight: '20px',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '0.1px',
              color: '#6C757D',
            }}
          >
            자세히 보기
          </Typography>
          {isDetailsOpen ? (
            <Image
              src={UpArrowIcon}
              alt="up-arrow"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src={DownArrowIcon}
              alt="down-arrow"
              width={20}
              height={20}
            />
          )}
        </Button>
      </Box>
      <Controller
        name={name}
        control={control}
        rules={{ required: isRequired }}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
            onChange={(event) => field.onChange(event.target.checked)}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              width: '40px',
              height: '40px',
            }}
          />
        )}
      />
      {/* TODO: 일단은 단순 문자열을 넣어 해당 영역만 표시. 협의 후 더 자세히 구현하기 */}
      <Collapse
        in={isDetailsOpen}
        sx={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '16px',
          gap: '10px',
          isolation: 'isolate',
          width: '400px',
          height: '192px',
          background: '#F8F9FA',
          border: '1px solid #DEE2E6',
          borderRadius: '12px',
          // NOTE: z-index가 없는 경우 이용약관 영역 바탕에 버튼과 Checkbox 영역이 비쳐 보임
          zIndex: '1',
        }}
      >
        <Typography
          sx={{
            width: '368px',
            height: '160px',
            fontFamily: 'Pretendard',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '0.1px',
            color: '#495057',
          }}
        >
          제 1 조 (목적) <br />
          회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 <br />
          이용할 수 있도록 회사 또는 관계사의 개별 서비스에 모두 접속 가능 <br />
          한 통합로그인계정 체계를 만들고 그에 적용되는 &apos;PRINT 계정 약관 <br />
          (이하 &apos;본 약관&apos;)&apos;을 마련하였습니다. 본 약관은 여러분이 PRINT 서 <br />
          비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절 <br />
          차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 <br />
          깊게 읽어주시기 바랍니다. <br />
        </Typography>
      </Collapse>
    </Box>
  );
}
