import { Controller } from 'react-hook-form';

import { CustomTextField } from './Input.styled';

import type {
  Control,
  FieldValues,
  ControllerRenderProps,
  ControllerFieldState,
  Path,
} from 'react-hook-form';
import type { TextFieldProps, InputBaseProps } from '@mui/material';

type CustomInputProps<TFieldValues extends FieldValues> = TextFieldProps & {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  InputProps?: InputBaseProps;
};

type FieldProps<TFieldValues extends FieldValues> = ControllerRenderProps<
  TFieldValues,
  Path<TFieldValues>
>;

export default function Input<TFieldValues extends FieldValues>({
  name,
  control,
  ...props
}: CustomInputProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field,
        fieldState,
      }: {
        field: FieldProps<TFieldValues>;
        fieldState: ControllerFieldState;
      }) => (
        <CustomTextField
          {...field}
          {...props}
          name={name}
          value={field.value || ''}
          error={Boolean(fieldState.error)}
        />
      )}
    />
  );
}
