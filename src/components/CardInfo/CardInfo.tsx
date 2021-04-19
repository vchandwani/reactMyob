import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Typography,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Formik, Form, Field, FieldProps, FieldArray } from 'formik';
import CloseIcon from '@material-ui/icons/Close';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { InvoiceSchema } from '../../lib/validation/invoice';
import { InvoiceObj, ItemsObj } from '../../types/invoice/data';
import CustomTextField from '../CustomTextField/CustomTextField';

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
  fieldMargin: {
    margin: theme.spacing(1, 0),
  },
  paddingItem: {
    padding: theme.spacing(0, 1, 0, 0),
  },
  paddingPriceItem: {
    padding: theme.spacing(0, 1, 0, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 0),
    },
  },
  amountHeader: {
    textAlign: 'right',
    padding: theme.spacing(0, 1, 0, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  amountText: {
    textAlign: 'right',
    padding: theme.spacing(0, 1, 0, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
}));

const CardInfo: React.FC = () => {
  const styles = useStyles();

  const [itemsArray, setItemsArray] = useState<Array<ItemsObj>>([
    {
      name: '',
      description: '',
      unitPrice: 0,
      quantity: 0,
      price: 0,
    },
  ]);

  const initialValues: InvoiceObj = {
    customerName: '',
    invoiceNumber: '',
    businessName: '',
    taxIncluded: false,
    items: itemsArray,
  };

  const [taxItem, setTaxItem] = useState<boolean>(
    initialValues ? initialValues.taxIncluded : false
  );
  const handleChangeOption = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (evt.target.value && typeof evt.target.value === 'string') {
      if (evt.target.value.toLowerCase() === 'true') setTaxItem(true);
      if (evt.target.value.toLowerCase() === 'false') setTaxItem(false);
    }
  };
  const itemsArrayNew: ItemsObj = {
    name: '',
    description: '',
    unitPrice: 0,
    quantity: 0,
    price: 0,
  };

  const renderAmountFields = (values: InvoiceObj): JSX.Element => {
    let totalAmount: number = 0;
    let netAmount: number = 0;
    let taxAmount: number = 0;
    const taxPercentage: number = 10;

    for (let i = 0; i < values.items.length; i++) {
      netAmount += values.items[i].unitPrice * values.items[i].quantity;
    }
    taxAmount = (taxPercentage * netAmount) / 100;
    if (taxItem) {
      totalAmount = netAmount;
    } else {
      totalAmount = netAmount + taxAmount;
    }
    return (
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        className={styles.marginTop}
        data-testid="amountDiv"
      >
        <Grid item xs={6} sm={9} data-testid="netAmountDiv">
          <Typography
            component="h5"
            variant="h5"
            className={styles.amountHeader}
          >
            Net Amount
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} data-testid="netAmountVal">
          <Typography component="h5" variant="h5" className={styles.amountText}>
            {netAmount}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Typography
            component="h5"
            variant="h5"
            className={styles.amountHeader}
            data-testid="taxAmountDiv"
          >
            Tax Amount
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} data-testid="taxAmountVal">
          <Typography component="h5" variant="h5" className={styles.amountText}>
            {taxAmount}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={9} data-testid="totalAmountDiv">
          <Typography
            component="h5"
            variant="h5"
            className={styles.amountHeader}
          >
            Total Amount
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} data-testid="totalAmountVal">
          <Typography component="h5" variant="h5" className={styles.amountText}>
            {totalAmount}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid xs={12} direction="row" container item>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={InvoiceSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
          alert(`Invoice generated : ${values.invoiceNumber}`);
        }}
      >
        {({ errors, touched, values, dirty, isSubmitting }) => {
          const addMore = () => {
            setItemsArray([...values.items, itemsArrayNew]);
          };

          const removeItem = (i: number): void => {
            const newItems: ItemsObj[] = values.items.splice(i, 1);
            setItemsArray(newItems);
          };

          return (
            <Form className={styles.form}>
              <Grid data-testid="cardDiv" container direction="row">
                <Grid xs={12} data-testid="cardCol" item>
                  <Paper elevation={1}>
                    <Card>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        xs={12}
                        item
                        className={styles.paddingCard}
                      >
                        <Grid
                          xs={12}
                          item
                          container
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            className={styles.fieldMargin}
                          >
                            <Field
                              name="customerName"
                              type="text"
                              data-testid="customerNameField"
                            >
                              {({ field, form, meta }: FieldProps) => (
                                <CustomTextField
                                  id="customerName"
                                  label="Customer Name *"
                                  field={field}
                                  meta={meta}
                                  errors={errors?.customerName}
                                  touched={touched?.customerName}
                                />
                              )}
                            </Field>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            className={styles.fieldMargin}
                          >
                            <Field
                              name="businessName"
                              type="text"
                              data-testid="businessNameField"
                            >
                              {({ field, form, meta }: FieldProps) => (
                                <CustomTextField
                                  id="businessName"
                                  label="Business Name *"
                                  field={field}
                                  meta={meta}
                                  errors={errors?.businessName}
                                  touched={touched?.businessName}
                                />
                              )}
                            </Field>
                          </Grid>
                        </Grid>
                        <Grid
                          xs={12}
                          item
                          container
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            className={styles.fieldMargin}
                          >
                            <Field
                              name="invoiceNumber"
                              type="text"
                              data-testid="invoiceNumberField"
                            >
                              {({ field, form, meta }: FieldProps) => (
                                <CustomTextField
                                  id="invoiceNumber"
                                  label="Invoice Name *"
                                  field={field}
                                  meta={meta}
                                  errors={errors?.invoiceNumber}
                                  touched={touched?.invoiceNumber}
                                />
                              )}
                            </Field>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            className={styles.fieldMargin}
                          >
                            <FormControl component="fieldset">
                              <FormLabel component="legend">Tax</FormLabel>

                              <Field component={RadioGroup} name="taxIncluded">
                                {({ field, form, meta }: FieldProps) => (
                                  <RadioGroup
                                    {...field}
                                    value={taxItem}
                                    onChange={handleChangeOption}
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
                                )}
                              </Field>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        className={styles.paddingCard}
                      >
                        <Grid item xs={12}>
                          <FieldArray
                            name="items"
                            render={() => {
                              const itemsVal: ItemsObj[] = values.items;

                              return (
                                <Grid item xs={12} container direction="row">
                                  {itemsVal &&
                                    itemsArray.length > 0 &&
                                    itemsArray.map(
                                      (itemData: ItemsObj, index: number) => (
                                        <Grid
                                          item
                                          xs={12}
                                          key={index.toString().concat('item')}
                                          direction="row"
                                          container
                                          className={styles.marginTop}
                                        >
                                          <Grid
                                            item
                                            xs={6}
                                            sm={2}
                                            className={styles.paddingItem}
                                          >
                                            <Field
                                              name={`items.${index}.name`}
                                              type="text"
                                              data-testid={index
                                                .toString()
                                                .concat('itemName')}
                                            >
                                              {({
                                                field,
                                                form,
                                                meta,
                                              }: FieldProps) => (
                                                <CustomTextField
                                                  id={index
                                                    .toString()
                                                    .concat('itemName')}
                                                  label="Name *"
                                                  field={field}
                                                  meta={meta}
                                                  errors={meta.error}
                                                  touched={meta.touched}
                                                />
                                              )}
                                            </Field>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={6}
                                            sm={2}
                                            className={styles.paddingItem}
                                          >
                                            <Field
                                              name={`items.${index}.description`}
                                              type="text"
                                              data-testid={index
                                                .toString()
                                                .concat('description')}
                                            >
                                              {({
                                                field,
                                                form,
                                                meta,
                                              }: FieldProps) => (
                                                <CustomTextField
                                                  id={index
                                                    .toString()
                                                    .concat('description')}
                                                  label="Description *"
                                                  field={field}
                                                  meta={meta}
                                                  errors={meta.error}
                                                  touched={meta.touched}
                                                />
                                              )}
                                            </Field>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={6}
                                            sm={2}
                                            className={styles.paddingItem}
                                          >
                                            <Field
                                              name={`items.${index}.unitPrice`}
                                              type="number"
                                              data-testid={index
                                                .toString()
                                                .concat('unitPrice')}
                                            >
                                              {({
                                                field,
                                                form,
                                                meta,
                                              }: FieldProps) => (
                                                <CustomTextField
                                                  id={index
                                                    .toString()
                                                    .concat('unitPrice')}
                                                  label="Unit Price *"
                                                  field={field}
                                                  meta={meta}
                                                  errors={meta.error}
                                                  touched={meta.touched}
                                                />
                                              )}
                                            </Field>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={6}
                                            sm={2}
                                            className={styles.paddingItem}
                                          >
                                            <Field
                                              name={`items.${index}.quantity`}
                                              type="number"
                                              data-testid={index
                                                .toString()
                                                .concat('quantity')}
                                            >
                                              {({
                                                field,
                                                form,
                                                meta,
                                              }: FieldProps) => (
                                                <CustomTextField
                                                  id={index
                                                    .toString()
                                                    .concat('quantity')}
                                                  label="Quantity *"
                                                  field={field}
                                                  meta={meta}
                                                  errors={meta.error}
                                                  touched={meta.touched}
                                                />
                                              )}
                                            </Field>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={6}
                                            sm={2}
                                            className={styles.paddingPriceItem}
                                          >
                                            <Field
                                              name={`items.${index}.price`}
                                              type="text"
                                              data-testid={index
                                                .toString()
                                                .concat('price')}
                                            >
                                              {({
                                                field,
                                                form,
                                                meta,
                                              }: FieldProps) => (
                                                <CustomTextField
                                                  id={index
                                                    .toString()
                                                    .concat('price')}
                                                  label="Price *"
                                                  field={field}
                                                  meta={meta}
                                                  errors={meta.error}
                                                  touched={meta.touched}
                                                />
                                              )}
                                            </Field>
                                          </Grid>
                                          {values.items.length > 1 && (
                                            <Grid
                                              item
                                              xs={3}
                                              sm={1}
                                              justify="center"
                                              alignItems="center"
                                              container
                                            >
                                              <CloseIcon
                                                onClick={() =>
                                                  removeItem(index)
                                                }
                                              />
                                            </Grid>
                                          )}
                                        </Grid>
                                      )
                                    )}
                                  <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignContent="center"
                                    className={styles.marginTop}
                                  >
                                    <Grid item xs={12} sm={3}>
                                      <Button
                                        fullWidth
                                        variant="outlined"
                                        onClick={() => addMore()}
                                      >
                                        Add Item{' '}
                                        <AddCircleOutlineOutlinedIcon />
                                      </Button>
                                    </Grid>
                                  </Grid>
                                  {renderAmountFields(values)}
                                </Grid>
                              );
                            }}
                          />
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
                <Grid xs={12} md={3} item>
                  <Button
                    data-testid="postFormSubmitButton"
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting || !dirty}
                  >
                    Generate Invoice
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default CardInfo;
