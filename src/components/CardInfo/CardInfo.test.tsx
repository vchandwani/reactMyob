import React, { ReactElement } from 'react';
import {
  render,
  cleanup,
  screen,
  act,
  waitFor,
  fireEvent,
} from '@testing-library/react';

import CardInfo from './CardInfo';

afterEach(cleanup);

const setup = () => {
  const renderCardInfo = <CardInfo />;
  return renderCardInfo;
};

describe('Card Info component loaded ', () => {
  let wrapper: ReactElement;

  beforeEach(() => {
    wrapper = setup();
  });

  test('initial loads card info component', async () => {
    await act(async () => {
      const { getByTestId } = render(wrapper);
      const cardInfoDiv = getByTestId('cardInfoDiv');
      expect(cardInfoDiv).toBeTruthy();
    });
  });

  test('initial loads card info component with default values', async () => {
    await act(async () => {
      const { getByTestId } = render(wrapper);
      const cardDiv = getByTestId('cardDiv');
      expect(cardDiv).toBeTruthy();
      const customerNameDiv = getByTestId('customerNameDiv');
      expect(customerNameDiv).toBeTruthy();
      expect(customerNameDiv.innerHTML).toContain('Customer Name');
      const businessNameDiv = getByTestId('businessNameDiv');
      expect(businessNameDiv).toBeTruthy();
      expect(businessNameDiv.innerHTML).toContain('Business Name');
      const invoiceNumberDiv = getByTestId('invoiceNumberDiv');
      expect(invoiceNumberDiv).toBeTruthy();
      expect(invoiceNumberDiv.innerHTML).toContain('Invoice Name');
      const taxIncludedField = getByTestId('taxIncludedField');
      expect(taxIncludedField).toBeTruthy();
      expect(taxIncludedField.innerHTML).toContain('Inclusive');
      const firstItemNameField = getByTestId('0itemNameField');
      expect(firstItemNameField).toBeTruthy();
      expect(firstItemNameField.value).toBe('');
      const firstItemDescriptionField = getByTestId('0descriptionField');
      expect(firstItemDescriptionField).toBeTruthy();
      expect(firstItemDescriptionField.value).toBe('');
      const firstUnitPriceField = getByTestId('0unitPriceField');
      expect(firstUnitPriceField).toBeTruthy();
      expect(firstUnitPriceField.value).toBe('0');
      const firstQuantityField = getByTestId('0quantityField');
      expect(firstQuantityField).toBeTruthy();
      expect(firstQuantityField.value).toBe('0');
      const firstPriceField = getByTestId('0priceField');
      expect(firstPriceField).toBeTruthy();
      expect(firstPriceField.value).toBe('0');
      const addButton = getByTestId('addButton');
      expect(addButton).toBeTruthy();
      expect(addButton.innerHTML).toContain('Add Item');
    });
  });

  test('submit form with filled data ', async () => {
    await act(async () => {
      const { getByTestId } = render(wrapper);
      const postFormSubmitButton = getByTestId('postFormSubmitButton');
      const customerNameField = getByTestId('customerNameField');
      fireEvent.change(customerNameField, { target: { value: 'Test' } });
      const businessNameField = getByTestId('businessNameField');
      fireEvent.change(businessNameField, { target: { value: 'Business' } });
      const invoiceNumberField = getByTestId('invoiceNumberField');
      fireEvent.change(invoiceNumberField, { target: { value: 'INV101' } });
      const firstItemName = getByTestId('0itemNameField');
      fireEvent.change(firstItemName, { target: { value: 'Test Item name' } });
      const firstDescription = getByTestId('0descriptionField');
      fireEvent.change(firstDescription, { target: { value: 'Description' } });
      const firstUnitPrice = getByTestId('0unitPriceField');
      fireEvent.change(firstUnitPrice, { target: { value: '1' } });
      const firstQuantity = getByTestId('0quantityField');
      waitFor(() =>
        fireEvent.change(firstQuantity, { target: { value: '1' } })
      );
      expect(postFormSubmitButton).toBeTruthy();
      waitFor(() => fireEvent.click(postFormSubmitButton));
    });
  });
  test('add additional row for Items ', async () => {
    await (() => {
      const { getByTestId } = render(wrapper);
      const addButton = getByTestId('addButton');
      waitFor(() => fireEvent.click(addButton));
      const itemsRow = getByTestId('itemsRow');
      expect(itemsRow).toHaveLength(2);
    });
  });
  test('Amount fields are displayed on the page ', async () => {
    await (() => {
      const { getByTestId } = render(wrapper);
      const amountDiv = getByTestId('amountDiv');
      expect(amountDiv).toBeTruthy();
      const netAmountDiv = getByTestId('netAmountDiv');
      expect(netAmountDiv).toBeTruthy();
      const netAmountVal = getByTestId('netAmountVal');
      expect(netAmountVal).toBeTruthy();
      const taxAmountVal = getByTestId('taxAmountVal');
      expect(netAmountDiv).toBeTruthy();
      const totalAmountDiv = getByTestId('totalAmountDiv');
      expect(totalAmountDiv).toBeTruthy();
      const totalAmountVal = getByTestId('totalAmountVal');
      expect(totalAmountVal).toBeTruthy();
    });
  });
  test('Net Amount field has proper title ', async () => {
    await (() => {
      const { getByTestId } = render(wrapper);
      const netAmountDiv = getByTestId('netAmountDiv');
      expect(netAmountDiv).toBeTruthy();
      expect(netAmountDiv.innerHTML).toContain('Net amount');
      const netAmountVal = getByTestId('netAmountVal');
      expect(netAmountVal).toBeTruthy();
      expect(netAmountDiv.innerHTML).toContain('0');
    });
  });
  test('Tax Amount field has proper title ', async () => {
    await (() => {
      const { getByTestId } = render(wrapper);
      const taxAmountDiv = getByTestId('taxAmountDiv');
      expect(taxAmountDiv).toBeTruthy();
      expect(taxAmountDiv.innerHTML).toContain('Tax amount');
      const taxAmountVal = getByTestId('taxAmountVal');
      expect(taxAmountVal).toBeTruthy();
      expect(taxAmountVal.innerHTML).toContain('0');
    });
  });
  test('Total Amount field has proper title ', async () => {
    await (() => {
      const { getByTestId } = render(wrapper);
      const totalAmountDiv = getByTestId('totalAmountDiv');
      expect(totalAmountDiv).toBeTruthy();
      expect(totalAmountDiv.innerHTML).toContain('Tax amount');
      const totalAmountVal = getByTestId('totalAmountVal');
      expect(totalAmountVal).toBeTruthy();
      expect(totalAmountVal.innerHTML).toContain('0');
    });
  });
});
