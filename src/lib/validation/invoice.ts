import { string, object, array, number } from 'yup';

export const InvoiceSchema = object().shape({
  // username: string().email('Invalid email address').required('Required'),
  name: string()
    .trim('Invalid')
    .required('Required')
    .min(5, 'Minimum 5 characters!'),
  invoiceNumber: string().required('Required'),
  businessName: string().required('Required'),
  taxIncluded: string().required('Required'),
  items: array()
    .of(
      object().shape({
        name: string().required('Required'),
        description: string().required('Required'),
        unitPrice: number().required('Required'),
        quantity: number().required('Required'),
      })
    )
    .required('Kindly select one'),
});
