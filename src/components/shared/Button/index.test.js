import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from 'components/shared';

const btnClickFn = jest.fn();
const href = 'http://mxstbr.com/';
const children = <h1>Test</h1>;

describe('<Button />', () => {
  it('should render a <button> tag to call an action if the handleRoute prop is specified', () => {
    render(
      <Button type="button" onClick={btnClickFn}>
        <span>Test</span>
      </Button>
    );
    expect(screen.getByRole('button')).toHaveTextContent('Test');
    fireEvent.click(screen.getByText(/Test/i));
    expect(btnClickFn).toHaveBeenCalledTimes(1);
  });
  it('should render a <a> hyperlink tag with attribute href', () => {
    render(
      <Button href={href}>
        <span>Test</span>
      </Button>
    );
    fireEvent.click(screen.getByText(/Test/i));
    expect(screen.getByText(/Test/i).closest('a')).toHaveAttribute('href', href);
    // assert the current browser url
  });
});
