import React from 'react';
import { render, screen, fireEvent } from 'utils/testReduxWrapper';
import Navbar from 'components/Navbar';

describe('<navbar /> ', () => {
  it('should render a <navbar> with menu /navigating ', () => {
    window.scrollTo = jest.fn();
    const leftClick = { button: 0 };
    render(<Navbar />);
    expect(screen.getByText(/Projets/i));
    fireEvent.click(screen.getByText(/À propos/i), leftClick);
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
  // expect(container.innerHTML).toMatch('You are on the about page');
});
