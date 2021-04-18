import { string, object, array, number, boolean } from 'yup';

export const InvoiceSchema = object().shape({
  customerName: string()
    .trim('Invalid')
    .required('Required')
    .min(5, 'Minimum 5 characters!'),
  invoiceNumber: string().required('Required'),
  businessName: string().required('Required'),
  taxIncluded: boolean().required('Required'),
  items: array()
    .of(
      object().shape({
        name: string().required('Required'),
        description: string().required('Required'),
        unitPrice: number().required('Required'),
        quantity: number().required('Required'),
        price: number(),
      })
    )
    .required('Kindly select one'),
});
