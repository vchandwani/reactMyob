import React, { ReactElement } from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

const setup = (title = 'Test') => {
  const renderHeader = <Header title={title} />;
  return renderHeader;
};

describe('Header component loaded ', () => {
  let wrapper: ReactElement;

  beforeEach(() => {
    wrapper = setup();
  });

  test('initial loads display header with title :  Test', () => {
    const { getByTestId } = render(wrapper);
    const headerDiv = getByTestId('headerDiv');
    expect(headerDiv).toBeTruthy();
    expect(headerDiv.innerHTML).toContain('Test');
  });
  test('header component with wrong title  : Wrong Title', () => {
    wrapper = setup('Wrong Title');
    const { getByTestId } = render(wrapper);
    const headerDiv = getByTestId('headerDiv');
    expect(headerDiv).toBeTruthy();
    expect(headerDiv.innerHTML).toContain('Wrong Title');
  });
});
