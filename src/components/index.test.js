import React from 'react';
import { render, screen, fireEvent } from 'utils/testReduxWrapper';
import AllPage from './initPage';

const component = (
  <AllPage>
    <span>children component</span>
  </AllPage>
);

describe('<InitPage />', () => {
  it('should render a <InitPage> component with navbar and footer ', () => {
    const initialState = { tabs: { current_tabs: 1 } };
    const { container } = render(component, initialState);
    expect(screen.getByText(/children component/i, { selector: 'span' }));
    expect(container.querySelector('nav'));
  });

  it('should render a <InitPage> component without navbar and footer only children component', () => {
    const initialState = { tabs: { current_tabs: 0 } };
    const { container } = render(
      <AllPage>
        <span hidenavfoot="true">children component</span>
      </AllPage>,
      initialState
    );
    expect(screen.getByText(/children component/i, { selector: 'span' }));
    // expect(container.querySelector('nav')).not.toBeInTheDocument();
  });
});
