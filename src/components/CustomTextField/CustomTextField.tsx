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
}

const CustomTextField: React.FC<TextFieldProps> = ({
  id,
  label,
  field,
  meta,
  errors,
  touched,
}) => (
  <TextField
    {...field}
    value={meta.value}
    variant="filled"
    data-testid="postFormTitleDiv"
    fullWidth
    autoFocus={true}
    id={id}
    label={label}
    autoComplete={id}
    error={meta.touched && meta.error !== undefined}
    helperText={errors && touched ? errors : null}
  />
);

export default CustomTextField;
