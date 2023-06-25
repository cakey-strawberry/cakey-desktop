import { Controller } from 'react-hook-form';

import CustomCheckbox from './Checkbox.styled';

import type {
  Control,
  FieldValues,
  ControllerProps,
  ControllerRenderProps,
  Path,
} from 'react-hook-form';
import type { CheckboxProps } from '@mui/material';

type CustomCheckboxProps<TFieldValues extends FieldValues> = CheckboxProps & {
  name?: Path<TFieldValues>;
  control?: Control<TFieldValues>;
  rules?: ControllerProps<TFieldValues>['rules'];
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type FieldProps<TFieldValues extends FieldValues> = ControllerRenderProps<
  TFieldValues,
  Path<TFieldValues>
>;

function Checkbox<TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  checked,
  onChange,
  ...props
}: CustomCheckboxProps<TFieldValues>) {
  // NOTE: react-hook-form의 Controller 로직이 포함된 Checkbox
  if (name && control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field,
        }: {
          field: FieldProps<TFieldValues>;
        }) => (
          <CustomCheckbox
            {...field}
            {...props}
            checked={field.value}
          />
        )}
      />
    );
  }

  // NOTE: Custom 스타일만 적용된 일반 Checkbox
  return (
    <CustomCheckbox
      {...props}
      checked={checked}
      onChange={onChange}
    />
  );
}

export default Checkbox;
