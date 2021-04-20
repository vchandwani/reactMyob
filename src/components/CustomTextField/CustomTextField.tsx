import React from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { TextField } from '@material-ui/core';
import { Values } from '../../types/invoice/data';

interface TextFieldProps {
  id: string;
  label: string;
  field: FieldInputProps<Values>;
  meta: FieldMetaProps<Values>;
  errors?: string;
  touched?: boolean | undefined;
  value?: string | number;
  disabled?: boolean;
}

const CustomTextField: React.FC<TextFieldProps> = ({
  id,
  label,
  field,
  meta,
  errors,
  touched,
  value,
  disabled,
}) => (
  <TextField
    {...field}
    value={value || meta.value}
    variant="filled"
    fullWidth
    autoFocus={true}
    id={id}
    label={label}
    autoComplete={id}
    error={meta.touched && meta.error !== undefined}
    helperText={errors && touched ? errors : null}
    disabled={disabled}
    InputProps={{
      inputProps: {
        'data-testid': id.concat('Field'),
      },
    }}
  />
);

export default CustomTextField;
