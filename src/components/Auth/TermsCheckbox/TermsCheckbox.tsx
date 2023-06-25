import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

import type { Control, RegisterOptions } from 'react-hook-form';
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
  control,
  isRequired,
  label,
  path,
}: TermsCheckboxProps) {
  const rules: RegisterOptions = {
    required: isRequired,
  };
  const router = useRouter();

  return (
    <TermsCheckboxWrapper>
      <Checkbox
        name={name}
        control={control}
        rules={rules}
        sx={{
          width: '40px',
          height: '40px',
        }}
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
