// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Paper, Grid } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CustomerData from '../CustomerData/CustomerData';
// import { Formik, Form, Field, FieldProps } from 'formik';
// import { InvoiceSchema } from '../../lib/validation/invoice';

// const useStyles = makeStyles((theme) => ({
//   marginTop: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const CardInfo: React.FC = () => {
//   const styles = useStyles();
//   const initialValues = {
//     name :'',
//     invoiceNumber :'',
//     businessName:'',
//     taxIncluded: '',
//     items : [{
//       name:'',
//       description:'',
//       unitPrice:0,
//       quantity:0

//     }]
//    };

//   return (
//     <Grid xs={12} direction="row" container>
//       <Formik
//       initialValues={initialValues}
//       enableReinitialize
//       validationSchema={InvoiceSchema}
//       onSubmit={(values, actions) => {
//         actions.setSubmitting(false);
//         onSubmit(values);
//       }}
//     >
//       {({ errors, handleBlur, handleChange, touched }) => (
//         <Form className={styles.form}>
//           <Grid
//             container
//             direction="row"
//             justify="flex-end"
//             alignItems="center"
//           >
//             <Grid item xs={12}>
//               <Field name="title" type="text">
//                 {({ field, form, meta }: FieldProps) => (
//                   <TextField
//                     {...field}
//                     value={meta.value}
//                     variant="filled"
//                     data-testid="postFormTitleDiv"
//                     fullWidth
//                     autoFocus={true}
//                     id="title"
//                     label="Title"
//                     autoComplete="title"
//                     error={meta.touched && meta.error !== undefined}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           {getUsernameEndAdornment(errors.title)}
//                         </InputAdornment>
//                       ),
//                       inputProps: {
//                         'data-testid': 'postFormTitleField',
//                       },
//                     }}
//                     helperText={
//                       errors.title && touched.title ? errors.title : null
//                     }
//                   />
//                 )}
//               </Field>
//             </Grid>
//             <Grid item xs={12}>
//               <Field name="body" type="text">
//                 {({ field, form, meta }: FieldProps) => (
//                   <TextField
//                     multiline
//                     rowsMax={4}
//                     {...field}
//                     variant="filled"
//                     fullWidth
//                     id="body"
//                     autoComplete="body"
//                     label="Content"
//                     error={meta.touched && meta.error !== undefined}
//                     helperText={
//                       errors.body && touched.body ? errors.body : null
//                     }
//                     inputProps={{
//                       'data-testid': 'postFormBodyField',
//                     }}
//                   />
//                 )}
//               </Field>
//             </Grid>
//             <Grid item xs={12}>
//               <Field name="author" type="text" label="Author">
//                 {({ field, form, meta }: FieldProps) => (
//                   <Select
//                     {...field}
//                     data-testid=""
//                     id="author"
//                     variant="filled"
//                     fullWidth
//                     error={meta.touched && meta.error !== undefined}
//                     inputProps={{
//                       'data-testid': 'postFormAuthorField',
//                     }}
//                   >
//                     <option value={AUTHOR}>{AUTHOR}</option>
//                     <option value="Unknown">Unknown</option>
//                   </Select>
//                 )}
//               </Field>
//             </Grid>
//             <Grid
//               container
//               direction="row"
//               item
//               xs={12}
//               justify="flex-end"
//               spacing={1}
//             >
//               <Grid item xs={12} sm={3}>
//                 <Button
//                   data-testid="postFormBackButton"
//                   variant="contained"
//                   color="secondary"
//                   fullWidth
//                   className={styles.submit}
//                   onClick={backClick}
//                 >
//                   Back
//                 </Button>
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Button
//                   data-testid="postFormSubmitButton"
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   className={styles.submit}
//                   disabled={editable && !formValues?.id}
//                 >
//                   {`${editable ? `Edit` : `Add`} Post`}
//                 </Button>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Form>
//       )}
//     </Formik>

//       <Grid data-testid="cardDiv" container direction="row">
//         <Grid xs={12} data-testid="cardCol">
//           <Paper elevation={1}>
//             <Card>
//               <CustomerData />
//             </Card>
//           </Paper>
//         </Grid>
//       </Grid>
//       <Grid
//         container
//         direction="row"
//         justify="flex-end"
//         alignItems="center"
//         className={styles.marginTop}
//       >
//         <Grid xs={12} md={3}>
//           Test
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default CardInfo;
