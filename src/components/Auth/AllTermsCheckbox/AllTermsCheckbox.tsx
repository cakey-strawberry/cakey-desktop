import { Checkbox } from '@/common/components/Checkbox';

import {
  AllTermsCheckboxWrapper,
  AllTermsLabelText,
} from './AllTermsCheckbox.styled';

import type { ChangeEvent } from 'react';

type AllTermsCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function AllTermsCheckbox({
  checked,
  onChange,
}: AllTermsCheckboxProps) {
  return (
    <AllTermsCheckboxWrapper>
      <Checkbox
        checked={checked}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.checked)
        }
        sx={{
          width: '40px',
          height: '40px',
        }}
      />
      <AllTermsLabelText>전체 동의</AllTermsLabelText>
    </AllTermsCheckboxWrapper>
  );
}

export default AllTermsCheckbox;
