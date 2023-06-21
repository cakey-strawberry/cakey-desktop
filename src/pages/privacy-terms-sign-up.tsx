import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';
import { Box, Typography, Divider } from '@mui/material';

import { ContentHeader } from '@/common/components/ContentHeader';
import { Checkbox } from '@/common/components/Checkbox';
import { Terms } from '@/components/Auth/Terms';
import { NextButton } from '@/components/Auth/NextButton';

export type FormValues = {
  locationConsent: boolean,
  serviceConsent: boolean,
}

export default function PrivacyTermsSignUp() {
  const [isAllConsentChecked, setIsAllConsentChecked] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      locationConsent: false,
      serviceConsent: false,
    },
  });
  const consentValues = useWatch<FormValues>({
    control,
    defaultValue: {
      locationConsent: false,
      serviceConsent: false,
    },
  });
  const router = useRouter();

  useEffect(() => {
    const isEveryConsentChecked = Object.values(consentValues)
        .every((consent: boolean) => consent);

    if (isEveryConsentChecked !== isAllConsentChecked) {
      setIsAllConsentChecked(isEveryConsentChecked);
    }
  }, [consentValues, isAllConsentChecked]);

  function handleAllConsentToggle(checked: boolean) {
    const consentNames = [
      ...Object.keys(consentValues),
    ] as (keyof FormValues)[];

    consentNames.forEach((name) => {
      setValue(name, checked, { shouldValidate: true });
    });
  }

  function onSubmit(formValues: FormValues) {
    // TODO: form value 확인용. api 연결 시 해당 console.log는 제거하기
    console.log(formValues);
    router.push('/profile-sign-up');
  }

  return (
    <>
      <Box
        id="wrapper"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '40px',
          position: 'absolute',
          width: '400px',
          left: '500px',
          top: '148px',
        }}
      >
        <ContentHeader
          title="한 단계만 거치면 케이키 가입 완료!"
          subtitle="복잡한 단계는 모두 없앴습니다."
        />
        <Box id="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              id="all-terms-wrapper"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                width: '400px',
                height: '80px',
              }}
            >
              <Box
                id="all-terms-title"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '8px',
                  width: '400px',
                  height: '40px',
                }}
              >
                <Typography
                  sx={{
                    width: '352px',
                    height: '24px',
                    fontFamily: 'Pretendard',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '0.15px',
                    color: '#111111',
                  }}
                >
                  전체 동의
                </Typography>
                <Checkbox
                  name="allConsent"
                  checked={isAllConsentChecked}
                  onChange={
                    (event) => handleAllConsentToggle(event.target.checked)
                  }
                  sx={{
                    padding: '0px',
                    width: '40px',
                    height: '40px',
                  }}
                />
              </Box>
              <Typography
                sx={{
                  width: '330px',
                  height: '40px',
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
                위치기반 서비스 이용 약관(선택), 서비스 이용 약관(필수)에 <br />
                모두 동의 합니다.
              </Typography>
            </Box>

            <Divider
              sx={{
                bgcolor: '#E9ECEF',
                margin: '24px 0',
              }}
            />

            <Box
              id="terms-list-container"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '24px',
                width: '400px',
                marginBottom: '40px',
              }}
            >
              <Terms
                name="locationConsent"
                title="위치기반 서비스 동의"
                isRequired={false}
                control={control}
              />
              <Terms
                name="serviceConsent"
                title="서비스 이용약관 동의"
                isRequired={true}
                control={control}
              />
            </Box>
            <NextButton type="submit" text="동의하고 계속" disabled={!isValid} />
          </form>
        </Box>
      </Box>
    </>
  );
}
