import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';
import { Box, Typography, Divider } from '@mui/material';

import { ContentHeader } from '@/common/components/ContentHeader';
import { Checkbox } from '@/common/components/Checkbox';
import { TermsCheckbox } from '@/components/Auth/TermsCheckbox';
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
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                width: '400px',
                height: '40px',
              }}
            >
              <Checkbox
                checked={isAllConsentChecked}
                onChange={
                  (event) => handleAllConsentToggle(event.target.checked)
                }
                sx={{
                  width: '40px',
                  height: '40px',
                }}
              />
              <Typography
                sx={{
                  width: '360px',
                  height: '24px',
                  fontFamily: 'Pretendard',
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: 'normal',
                  display: 'flex',
                  alignItems: 'center',
                  letterSpacing: '0.15px',
                  color: '#111111',
                }}
              >
                전체 동의
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
              <TermsCheckbox
                name="locationConsent"
                control={control}
                isRequired={false}
                label="위치기반 서비스 동의"
                path="/terms-of-location"
              />
              <TermsCheckbox
                name="serviceConsent"
                control={control}
                isRequired={true}
                label="서비스 이용약관 동의"
                path="/terms-of-service"
              />
            </Box>
            <NextButton type="submit" text="동의하고 계속" disabled={!isValid} />
          </form>
        </Box>
      </Box>
    </>
  );
}
