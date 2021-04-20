import React, { ReactElement } from 'react';
import { render, cleanup } from '@testing-library/react';
import Blog from './Blog';

afterEach(cleanup);

const setup = () => {
  const renderBlog = <Blog />;
  return renderBlog;
};

describe('Blog container loaded ', () => {
  let wrapper: ReactElement;

  beforeEach(() => {
    wrapper = setup();
  });

  test('initial loads Application ', () => {
    const { getByTestId } = render(wrapper);
    const portalContainer = getByTestId('portalContainer');
    expect(portalContainer).toBeTruthy();
    expect(portalContainer.innerHTML).toContain('Invoice');
  });
});
