import { Checkbox } from '@/common/components/Checkbox';

import {
  AllTermsCheckboxWrapper,
  AllTermsLabelText,
} from './AllTermsCheckbox.styled';

import type { ChangeEvent } from 'react';

type AllTermsCheckboxProps = {
  checked: boolean;
  onCheckboxChange: (checked: boolean) => void;
}

function AllTermsCheckbox({
  checked,
  onCheckboxChange,
}: AllTermsCheckboxProps) {
  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    onCheckboxChange(event.target.checked);
  }

  return (
    <AllTermsCheckboxWrapper>
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
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
