import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Controller } from 'react-hook-form';

import { Checkbox } from '@/common/components/Checkbox';
import RightArrowIcon from '@/common/assets/icons/right-arrow.svg';

import {
  TermsCheckboxWrapper,
  TermsLabelAndDetailsViewbutton,
  TermsLabel,
  TermsLabelText,
  TermsLabeSubtext,
  TermsDetailsViewbutton,
} from './TermsCheckbox.styled';

import type { Control } from 'react-hook-form';
import type { FormValues } from '@/pages/privacy-terms-sign-up';

type TermsCheckboxProps = {
  name: keyof FormValues;
  label: string;
  isRequired: boolean;
  control: Control<FormValues>;
  path: string;
};

export default function TermsCheckbox({
  name,
  label,
  isRequired,
  control,
  path,
}: TermsCheckboxProps) {
  const router = useRouter();

  return (
    <TermsCheckboxWrapper>
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
              padding: '0px',
              width: '40px',
              height: '40px',
            }}
          />
        )}
      />
      <TermsLabelAndDetailsViewbutton>
        <TermsLabel>
          <TermsLabelText>{label}</TermsLabelText>
          <TermsLabeSubtext>{isRequired ? '(필수)' : '(선택)'}</TermsLabeSubtext>
        </TermsLabel>
        <TermsDetailsViewbutton onClick={() => router.push(path)}>
          <Image src={RightArrowIcon} alt="이용약관 상세 보기" width={20} height={20} />
        </TermsDetailsViewbutton>
      </TermsLabelAndDetailsViewbutton>
    </TermsCheckboxWrapper>
  );
}
