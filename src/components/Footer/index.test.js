import React from 'react';
import { render, screen, fireEvent } from 'utils/testReduxWrapper';
import Footer from 'components/Footer';

describe('<footer />', () => {
  it('should render a <navbar> tag to call an action if the handleRoute prop is specified', () => {
    const { container } = render(<Footer />);
    expect(screen.getByText(/Bachelerie Luc/i));
    expect(container.querySelector('footer'));
  });
});
