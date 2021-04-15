export interface InvoiceObj {
  customerName: string;
  businessName: string;
  invoiceNumber: string;
  taxIncluded: boolean;
  items: ItemsObj[];
}
export interface ItemsObj {
  name: string;
  description: string;
  unitPrice: number;
  quantity: number;
  price: number;
}

export enum NotificationType {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}
