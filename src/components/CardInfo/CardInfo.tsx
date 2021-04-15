import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Formik, Form, Field, FieldProps } from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorIcon from '@material-ui/icons/Error';
import CustomerData from '../CustomerData/CustomerData';
import { InvoiceSchema } from '../../lib/validation/invoice';
import { InvoiceObj } from '../../types/invoice/data';

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  crossIcon: {
    color: theme.palette.error.main,
  },
  paddingCard: {
    padding: theme.spacing(1, 0, 1, 1),
  },
}));

const CardInfo: React.FC = () => {
  const styles = useStyles();
  const initialValues: InvoiceObj = {
    customerName: '',
    invoiceNumber: '',
    businessName: '',
    taxIncluded: false,
    items: [
      {
        name: '',
        description: '',
        unitPrice: 0,
        quantity: 0,
        price: 0,
      },
    ],
  };
  const getUsernameEndAdornment = (error: string | undefined): JSX.Element => {
    if (error) {
      return <ErrorIcon className={styles.crossIcon} />;
    }
    return <span />;
  };

  return (
    <Grid xs={12} direction="row" container>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={InvoiceSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
          // onSubmit(values);
        }}
      >
        {({ errors, handleBlur, handleChange, touched }) => (
          <Form className={styles.form}>
            <Grid data-testid="cardDiv" container direction="row">
              <Grid xs={12} data-testid="cardCol">
                <Paper elevation={1}>
                  <Card>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      xs={12}
                      className={styles.paddingCard}
                      spacing={1}
                    >
                      <Grid xs={12} sm={6} item alignItems="center">
                        <Grid item>
                          <Field name="customerName" type="text">
                            {({ field, form, meta }: FieldProps) => (
                              <TextField
                                {...field}
                                value={meta.value}
                                variant="filled"
                                data-testid="postFormTitleDiv"
                                fullWidth
                                autoFocus={true}
                                id="customerName"
                                label="Customer Name"
                                autoComplete="customerName"
                                error={meta.touched && meta.error !== undefined}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      {getUsernameEndAdornment(
                                        errors.customerName
                                      )}
                                    </InputAdornment>
                                  ),
                                  inputProps: {
                                    'data-testid': 'postFormCustomerNameField',
                                  },
                                }}
                                helperText={
                                  errors.customerName && touched.customerName
                                    ? errors.customerName
                                    : null
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item>
                          <Field name="businessName" type="text">
                            {({ field, form, meta }: FieldProps) => (
                              <TextField
                                {...field}
                                value={meta.value}
                                variant="filled"
                                data-testid="postFormTitleDiv"
                                fullWidth
                                autoFocus={true}
                                id="businessName"
                                label="Business Name"
                                autoComplete="businessName"
                                error={meta.touched && meta.error !== undefined}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      {getUsernameEndAdornment(
                                        errors.businessName
                                      )}
                                    </InputAdornment>
                                  ),
                                  inputProps: {
                                    'data-testid': 'postFormBusinessNameField',
                                  },
                                }}
                                helperText={
                                  errors.businessName && touched.businessName
                                    ? errors.businessName
                                    : null
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                      </Grid>
                      <Grid xs={12} sm={6} item alignItems="center">
                        <Grid item>
                          <Field name="customerName" type="text">
                            {({ field, form, meta }: FieldProps) => (
                              <TextField
                                {...field}
                                value={meta.value}
                                variant="filled"
                                data-testid="postFormTitleDiv"
                                fullWidth
                                autoFocus={true}
                                id="invoiceNumber"
                                label="Invoice Number"
                                autoComplete="invoiceNumber"
                                error={meta.touched && meta.error !== undefined}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      {getUsernameEndAdornment(
                                        errors.invoiceNumber
                                      )}
                                    </InputAdornment>
                                  ),
                                  inputProps: {
                                    'data-testid': 'postFormInvoiceNumberField',
                                  },
                                }}
                                helperText={
                                  errors.invoiceNumber && touched.invoiceNumber
                                    ? errors.invoiceNumber
                                    : null
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item>
                          <Field name="taxIncluded" type="text">
                            <FormLabel component="legend">Tax</FormLabel>
                            {({ field, form, meta }: FieldProps) => (
                              <RadioGroup
                                {...field}
                                name="taxIncluded"
                                value={meta.value}
                                onChange={handleChange}
                                // helperText={
                                //   errors.taxIncluded && touched.taxIncluded
                                //     ? errors.taxIncluded
                                //     : null
                                // }
                              >
                                <FormControlLabel
                                  value={true}
                                  control={<Radio />}
                                  label="Inclusive"
                                />
                                <FormControlLabel
                                  value={false}
                                  control={<Radio />}
                                  label="Exclusive"
                                />
                              </RadioGroup>

                              // <TextField
                              //   {...field}
                              //   value={meta.value}
                              //   variant="filled"
                              //   data-testid="postFormTitleDiv"
                              //   fullWidth
                              //   autoFocus={true}
                              //   id="taxIncluded"
                              //   label="Invoice Number"
                              //   autoComplete="taxIncluded"
                              //   error={meta.touched && meta.error !== undefined}
                              //   InputProps={{
                              //     endAdornment: (
                              //       <InputAdornment position="end">
                              //         {getUsernameEndAdornment(
                              //           errors.taxIncluded
                              //         )}
                              //       </InputAdornment>
                              //     ),
                              //     inputProps: {
                              //       'data-testid': 'postFormTaxIncludedField',
                              //     },
                              //   }}
                              //   helperText={
                              //     errors.taxIncluded && touched.taxIncluded
                              //       ? errors.taxIncluded
                              //       : null
                              //   }
                              // />
                            )}
                          </Field>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={styles.marginTop}
            >
              <Grid xs={12} md={3}>
                Test
                <Button
                  data-testid="postFormSubmitButton"
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  // disabled={}
                >
                  Generate Invoice
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default CardInfo;
